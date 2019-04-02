const {app, BrowserWindow} = require('electron');

let win;

function createWindow (){
    win = new BrowserWindow({
        width: 1000,
        heigth: 600,
        backgroundColor: '#ffffff'
    })

    win.loadURL('file://' + __dirname + '/dist/cli-elc/index.html')
}

app.on('ready', createWindow);