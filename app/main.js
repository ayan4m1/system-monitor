const { join } = require('path');
const { app, ipcMain, BrowserWindow } = require('electron');
const PowerShell = require('powershell');

const { generateHash } = require('./util');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false,
      preload: join(__dirname, 'preload.js')
    }
  });

  win.loadFile(join(__dirname, 'dist', 'index.html'));
};

app.whenReady().then(createWindow);

ipcMain.on('command', (event, command) => {
  const shell = new PowerShell(command);
  const output = [];

  const appendOutput = (data) => output.push(data.replace(/\r\n$/, ''));

  shell
    .on('error', (error) => {
      event.reply(`${generateHash(command)}-error`, error);
    })
    .on('output', appendOutput)
    .on('error-output', appendOutput)
    .on('end', () => {
      event.reply(`${generateHash(command)}-output`, output);
    });
});
