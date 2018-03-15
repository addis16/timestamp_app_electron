var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var mysql = require('mysql');

var connect = mysql.createConnection({
    host: "localhost",
    database: "file_access_electron",
    user: "root",
    password: "root"
});

connect.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.on('ready', function() {
    var appWindow;
    var appWindow = new BrowserWindow({
        width: 1000,
        height: 1000,

    });
    appWindow.loadURL('file://' + __dirname + '/index.html');

});
