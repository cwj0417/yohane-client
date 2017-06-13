const path = require("path")
const {
    app,
    BrowserWindow,
    Menu,
    ipcMain,
    dialog
} = require('electron')
const url = require('url')

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600})

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', function () {

        mainWindow = null
    })
}

app.on("ready", createWindow)