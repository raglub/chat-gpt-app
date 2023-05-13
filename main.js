const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1900,
    height: 1000,
    title: "ChatGPT",
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.on('page-title-updated', (evt) => {
    evt.preventDefault();
  });

  win.loadURL('https://chat.openai.com/')
}

app.whenReady().then(createWindow)
