const { app, BrowserWindow } = require('electron')
const nativeImage = require('electron').nativeImage
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1900,
    height: 1000,
    title: "ChatGPT",
    // icon: path.join(__dirname, 'icon', 'Icon-512x512.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  })
  console.log(path.join(__dirname, 'icon', 'Icon-512x512.png'))
  // win.setIcon(path.join(__dirname, 'icon.png'));
  win.on('page-title-updated', (evt) => {
    evt.preventDefault();
  });

  win.loadURL('https://chat.openai.com/')
}

app.whenReady().then(createWindow)
