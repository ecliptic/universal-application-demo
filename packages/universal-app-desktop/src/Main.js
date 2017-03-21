import {Constants} from 'universal-app-core'
import {getMacTemplate, getWinTemplate} from './App/Menu'
import {app, BrowserWindow, Menu} from 'electron'
import {createMainStore} from './App/Store'

/**
 * Initialize the Electron main process
 */
async function main () {
  if (Constants.DEV) {
    require('electron-debug')({showDevTools: true})

    // Install extensions
    const installer = require('electron-devtools-installer')
    const {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} = installer

    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    try {
      await installer.default(REACT_DEVELOPER_TOOLS, forceDownload)
      await installer.default(REDUX_DEVTOOLS, forceDownload)
      console.info('√ Developer extensions installed')
    } catch (error) {
      error(error)
    }
  }

  const index = Constants.DEV
    ? `http://localhost:${Constants.PORT}/index.html`
    : `file://${__dirname}/../public/index.html`

  let win = new BrowserWindow()

  // Set the menu depending on the platform
  const template = Constants.MAC
    ? getMacTemplate(win, () => app.quit())
    : getWinTemplate(win)
  const appMenu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(appMenu)

  win.loadURL(index)

  win.webContents.on('did-finish-load', () => {
    win.show()
    win.focus()
  })

  win.on('closed', () => { win = null })

  createMainStore()

  // When an additional instance is requested, show the menubar window
  app.makeSingleInstance(() => win.show())

  process.on('uncaughtException', err => {
    console.error('[main]', err)
    app.quit()
  })
}

/**
 * Kick off application initialization.
 */
if (app.isReady()) {
  main()
} else {
  app.on('ready', main)
}
