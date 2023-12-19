const path = require ('path');
const {app, BrowserWindow} = require ('electron');
const url = require('url')

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'dawrin';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Habix",
        width: isDev? 1600 : 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            // contextIsolation: true, // Disable context isolation
            // enableRemoteModule: false, // Enable remote module (if needed)
            // webSecurity: true, // Disable web security (for debugging purposes)
        },
    })

    const startUrl = url.format({
    
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file', 
    }) 

    mainWindow.loadURL(startUrl)

//Open Devtools if in dev env
    if (isDev){
        mainWindow.webContents.openDevTools();
    }

}

app.whenReady().then(createMainWindow)



