import 'dart:io';

import 'package:device_info_plus/device_info_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_downloader/flutter_downloader.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';

import 'package:wdms_mobile/constants/app_constants.dart';

class CommonWebView extends StatefulWidget {
  const CommonWebView({super.key});

  @override
  State<CommonWebView> createState() => _CommonWebViewState();
}

class _CommonWebViewState extends State<CommonWebView> {
  InAppWebViewSettings? _webViewSettings;
  InAppWebViewController? _webViewController;

  double _progress = 0;

  @override
  void initState() {
    super.initState();
    _initSettings();
  }

  //! --- WEBVIEW SETTINGS
  Future<void> _initSettings() async {
    final isDarkMode =
        WidgetsBinding.instance.platformDispatcher.platformBrightness ==
            Brightness.dark;

    bool useAlgorithmic = false;
    ForceDark useForceDark = ForceDark.AUTO;

    if (Platform.isAndroid && isDarkMode) {
      final androidInfo = await DeviceInfoPlugin().androidInfo;
      final sdkInt = androidInfo.version.sdkInt;

      if (sdkInt >= 33) {
        useAlgorithmic = true;
        useForceDark = ForceDark.AUTO;
      } else if (sdkInt >= 29) {
        useAlgorithmic = false;
        useForceDark = ForceDark.ON;
      }
    }

    setState(() {
      _webViewSettings = InAppWebViewSettings(
        algorithmicDarkeningAllowed: useAlgorithmic,
        forceDark: useForceDark,
        transparentBackground: false,
        overScrollMode: OverScrollMode.NEVER,
        useOnDownloadStart: true,
        mixedContentMode: MixedContentMode.MIXED_CONTENT_ALWAYS_ALLOW,
      );
    });
  }

  //! --- PERMISSIONS & DOWNLOAD LOGIC ---
  Future<bool> _checkPermission() async {
    if (Platform.isAndroid) {
      if (await Permission.notification.status != PermissionStatus.granted) {
        await Permission.notification.request();
      }

      final androidInfo = await DeviceInfoPlugin().androidInfo;
      if (androidInfo.version.sdkInt >= 33) return true;

      final storageStatus = await Permission.storage.status;
      if (storageStatus != PermissionStatus.granted) {
        final result = await Permission.storage.request();
        return result == PermissionStatus.granted;
      }
      return true;
    }
    return false;
  }

  void _downloadFile(DownloadStartRequest request) async {
    if (!await _checkPermission()) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Permission denied. Cannot download.')),
        );
      }
      return;
    }

    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Downloading ${request.suggestedFilename ?? "file"}...'),
          duration: const Duration(seconds: 2),
        ),
      );
    }

    final cookies = await CookieManager.instance().getCookies(url: request.url);
    final cookieString = cookies.map((c) => '${c.name}=${c.value}').join('; ');

    final Map<String, String> headers = {
      if (cookieString.isNotEmpty) 'Cookie': cookieString,
      if (request.userAgent != null) 'User-Agent': request.userAgent!,
      'Referer': request.url.toString(),
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    };

    final Directory? externalDir = await getExternalStorageDirectory();
    final String fileName = request.suggestedFilename ?? "download_${DateTime.now().millisecondsSinceEpoch}";

    await FlutterDownloader.enqueue(
      url: request.url.toString(),
      savedDir: externalDir!.path,
      fileName: fileName,
      headers: headers,
      showNotification: true,
      openFileFromNotification: true,
      saveInPublicStorage: true,
      allowCellular: true,
    );
  }

  //! --- EXTRACTED CALLBACK METHODS TO REDUCE BUILD COMPLEXITY ---

  void _onWebViewCreated(InAppWebViewController controller) {
    _webViewController = controller;
  }

  void _onProgressChanged(InAppWebViewController controller, int progress) {
    setState(() => _progress = progress / 100);
  }

  Future<ServerTrustAuthResponse?> _onReceivedServerTrustAuthRequest(
      InAppWebViewController controller, URLAuthenticationChallenge challenge) async {
    return ServerTrustAuthResponse(action: ServerTrustAuthResponseAction.PROCEED);
  }

  Future<void> _onLoadStop(InAppWebViewController controller, WebUri? url) async {
    await controller.injectCSSCode(
      source: """
        * {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-touch-callout: none !important;
          outline: none !important;
        }
      """,
    );
  }

  void _onPopInvoked(bool didPop, Object? result) async {
    if (didPop) return;
    if (_webViewController != null && await _webViewController!.canGoBack()) {
      _webViewController!.goBack();
    } else {
      if (context.mounted) Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    final backgroundColor = isDarkMode ? Colors.black : Colors.white;
    final iconBrightness = isDarkMode ? Brightness.light : Brightness.dark;

    final overlayStyle = SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      systemNavigationBarColor: Colors.transparent,
      statusBarIconBrightness: iconBrightness,
      systemNavigationBarIconBrightness: iconBrightness,
    );

    if (_webViewSettings == null) {
      return AnnotatedRegion<SystemUiOverlayStyle>(
        value: overlayStyle,
        child: Scaffold(
          backgroundColor: backgroundColor,
          body: const Center(child: CircularProgressIndicator()),
        ),
      );
    }

    // Build method is now purely declarative and highly readable
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: overlayStyle,
      child: PopScope(
        canPop: false,
        onPopInvokedWithResult: _onPopInvoked,
        child: Scaffold(
          backgroundColor: backgroundColor,
          body: Stack(
            children: [
              InAppWebView(
                initialUrlRequest: URLRequest(url: WebUri(AppConstants.webUrl)),
                initialSettings: _webViewSettings,
                onWebViewCreated: _onWebViewCreated,
                onProgressChanged: _onProgressChanged,
                onReceivedServerTrustAuthRequest: _onReceivedServerTrustAuthRequest,
                onDownloadStartRequest: (controller, request) => _downloadFile(request),
                onLoadStop: _onLoadStop,
              ),
              if (_progress < 1.0)
                SafeArea(
                  child: LinearProgressIndicator(
                    value: _progress,
                    color: const Color(0xFF753996),
                    backgroundColor: Colors.transparent,
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}