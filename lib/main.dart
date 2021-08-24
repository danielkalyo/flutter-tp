import 'package:flutter/material.dart';
import 'package:flutter_app/pages/LoginPage.dart';


void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: ThemeData(primarySwatch: Colors.grey),
    home: LoginPage(),
  ));
}


