const functions = require("firebase-functions");
const express = require("express");
const basicAuth = require("basic-auth-connect");

const app = express();

// ここでユーザー名とパスワードを設定します
const USERNAME = "jrh"; 
const PASSWORD = "epass000";

// Basic認証を設定
app.use(basicAuth(USERNAME, PASSWORD));

// 認証が成功したら、publicフォルダのHTMLを表示する
app.use(express.static(__dirname + "/../public"));

exports.basicAuth = functions.https.onRequest(app);