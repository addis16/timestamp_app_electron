var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var mysql = require('mysql');
var ipc = electron.ipcMain;

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
        height: 700,

    });
    appWindow.loadURL('file://' + __dirname + '/index.html');
    
});
ipc.on('submitClick', function(event) {
    console.log("clicked");
    event.returnValue = "";
});


