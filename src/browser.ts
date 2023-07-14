import path from "path"
import { app, BrowserWindow, screen, session } from "electron"
import { ElectronChromeExtensions } from "electron-chrome-extensions";

var mainWindow: BrowserWindow | undefined
let extension_id : String

app.on('ready', async function () {
  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: screen.getPrimaryDisplay().workAreaSize.width / 2,
    height: screen.getPrimaryDisplay().workAreaSize.height / 2,
    frame: true,
    movable: true,
    alwaysOnTop: false,
    autoHideMenuBar: false,
    darkTheme: true,
    title: "MyAI",
    icon: path.join(__dirname, 'assets/icons/poe.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true,
      webSecurity: false,
      devTools: true
    },
  });
    
  mainWindow.loadURL("file://" + __dirname + "/assets/html/index.html")
  mainWindow.on("ready-to-show", function () {
    mainWindow?.show();
    mainWindow?.focus();
  })
});

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors')
