const { contextBridge, ipcRenderer } = require('electron');

const { generateHash } = require('./util');

contextBridge.exposeInMainWorld('powershell', {
  execute: (command) =>
    new Promise((resolve, reject) => {
      ipcRenderer.send('command', command);
      ipcRenderer.once(`${generateHash(command)}-error`, (_, error) =>
        reject(error)
      );
      ipcRenderer.once(`${generateHash(command)}-output`, (_, output) =>
        resolve(output)
      );
    })
});
