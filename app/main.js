const { join } = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    alwaysOnTop: true,
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
  });

  win.loadFile(join(__dirname, 'dist', 'index.html'));
};

app.whenReady().then(createWindow);
