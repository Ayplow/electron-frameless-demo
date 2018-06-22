const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 100,
        height: 120,
        show: false,
        frame: false
    });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.show()
    
})