const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('powershell', {
  execute: (command) =>
    new Promise((resolve, reject) => {
      ipcRenderer.send('command', command);
      ipcRenderer.once('error', (_, error) => reject(error));
      ipcRenderer.once('output', (_, output) => resolve(output));
    })
});
