import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_downloader/flutter_downloader.dart';
import 'package:wdms_mobile/screens/common_webview.dart';

void main() async {
  // It's best practice to ensure the Flutter binding is initialized,
  WidgetsFlutterBinding.ensureInitialized();

  // Set the app to edge-to-edge mode
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
  SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
    statusBarColor: Colors.transparent,
    systemNavigationBarColor: Colors.transparent,
    statusBarIconBrightness: Brightness.dark,
    systemNavigationBarIconBrightness: Brightness.dark,
  ));

  await FlutterDownloader.initialize(
      debug: true,
      ignoreSsl: true // Set to true if specific website has SSL issues!
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Provide standard light theme
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blueAccent),
        useMaterial3: true,
        brightness: Brightness.light,
      ),

      // Provide a dark theme
      darkTheme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blueAccent,
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
        brightness: Brightness.dark,
      ),

      // Set theme mode
      themeMode: ThemeMode.system,

      // Set the home page
      home: const CommonWebView(),
    );
  }
}

