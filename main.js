const path = require ('path');
const {app, BrowserWindow} = require ('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'dawrin';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Habix",
        width: isDev? 1000 : 500,
        height: 500,
    })

//Open Devtools if in dev env
if (isDev){
    mainWindow.webContents.openDevTools();
}

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    })

})

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})