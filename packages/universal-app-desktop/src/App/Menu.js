import {shell} from 'electron'

export function getMacTemplate (mainWindow, quitApp) {
  return [{
    label: 'UniversalApp',
    submenu: [
      {label: 'About UniversalApp', selector: 'orderFrontStandardAboutPanel:'},
      {type: 'separator'},
      {label: 'Services', submenu: []},
      {type: 'separator'},
      {label: 'Hide UniversalApp', accelerator: 'Command+H', selector: 'hide:'},
      {label: 'Hide Others', accelerator: 'Command+Shift+H', selector: 'hideOtherApplications:'},
      {label: 'Show All', selector: 'unhideAllApplications:'},
      {type: 'separator'},
      {label: 'Quit', accelerator: 'Command+Q', click: () => quitApp()},
    ],
  }, {
    label: 'Edit',
    submenu: [
      {label: 'Undo', accelerator: 'Command+Z', selector: 'undo:'},
      {label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:'},
      {type: 'separator'},
      {label: 'Cut', accelerator: 'Command+X', selector: 'cut:'},
      {label: 'Copy', accelerator: 'Command+C', selector: 'copy:'},
      {label: 'Paste', accelerator: 'Command+V', selector: 'paste:'},
      {label: 'Select All', accelerator: 'Command+A', selector: 'selectAll:'},
    ],
  }, {
    label: 'View',
    submenu: (process.env.NODE_ENV === 'development') ? [{
      label: 'Reload',
      accelerator: 'Command+R',
      click: () => mainWindow && mainWindow.webContents.reload(),
    }, {
      label: 'Toggle Full Screen',
      accelerator: 'Ctrl+Command+F',
      click: () => mainWindow && mainWindow.setFullScreen(!mainWindow.isFullScreen()),
    }, {
      label: 'Toggle Developer Tools',
      accelerator: 'Alt+Command+I',
      click: () => mainWindow && mainWindow.toggleDevTools(),
    }] : [{
      label: 'Toggle Full Screen',
      accelerator: 'Ctrl+Command+F',
      click: () => mainWindow && mainWindow.setFullScreen(!mainWindow.isFullScreen()),
    }],
  }, {
    label: 'Window',
    submenu: [
      {label: 'Minimize', accelerator: 'Command+M', selector: 'performMiniaturize:'},
      {label: 'Close', accelerator: 'Command+W', selector: 'performClose:'},
      {type: 'separator'},
      {label: 'Bring All to Front', selector: 'arrangeInFront:'},
    ],
  }, {
    label: 'Help',
    submenu: [{
      label: 'Learn More',
      click: () => shell.openExternal('http://electron.atom.io'),
    }, {
      label: 'Documentation',
      click: () => shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme'),
    }, {
      label: 'Community Discussions',
      click: () => shell.openExternal('https://discuss.atom.io/c/electron'),
    }, {
      label: 'Search Issues',
      click: () => shell.openExternal('https://github.com/atom/electron/issues'),
    }],
  }]
}

export function getWinTemplate (mainWindow) {
  return [{
    label: '&File',
    submenu: [{
      label: '&Open',
      accelerator: 'Ctrl+O',
    }, {
      label: '&Close',
      accelerator: 'Ctrl+W',
      click: () => mainWindow && mainWindow.close(),
    }],
  }, {
    label: '&View',
    submenu: (process.env.NODE_ENV === 'development') ? [{
      label: '&Reload',
      accelerator: 'Ctrl+R',
      click: () => mainWindow && mainWindow.webContents.reload(),
    }, {
      label: 'Toggle &Full Screen',
      accelerator: 'F11',
      click: () => mainWindow && mainWindow.setFullScreen(!mainWindow.isFullScreen()),
    }, {
      label: 'Toggle &Developer Tools',
      accelerator: 'Alt+Ctrl+I',
      click: () => mainWindow && mainWindow.toggleDevTools(),
    }] : [{
      label: 'Toggle &Full Screen',
      accelerator: 'F11',
      click: () => mainWindow && mainWindow.setFullScreen(!mainWindow.isFullScreen()),
    }],
  }, {
    label: 'Help',
    submenu: [{
      label: 'Learn More',
      click: () => shell.openExternal('http://electron.atom.io'),
    }, {
      label: 'Documentation',
      click: () => shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme'),
    }, {
      label: 'Community Discussions',
      click: () => shell.openExternal('https://discuss.atom.io/c/electron'),
    }, {
      label: 'Search Issues',
      click: () => shell.openExternal('https://github.com/atom/electron/issues'),
    }],
  }]
}
