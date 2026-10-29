const { app, BrowserWindow, shell, session } = require('electron');
const path = require('node:path');

const HOME_URL = 'https://www.pw.live/';
const ALLOWED_HOSTS = new Set(['pw.live', 'www.pw.live']);

function isAllowed(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && (ALLOWED_HOSTS.has(parsed.hostname) || parsed.hostname.endsWith('.pw.live'));
  } catch { return false; }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 850, minWidth: 900, minHeight: 600,
    title: 'Physics Wallah', backgroundColor: '#ffffff', autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isAllowed(url)) setImmediate(() => win.loadURL(url));
    else shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (event, url) => {
    if (!isAllowed(url)) { event.preventDefault(); shell.openExternal(url); }
  });
  win.loadURL(HOME_URL);
}

app.whenReady().then(() => {
  app.setAppUserModelId('in.mrcurious3.physicswallah');
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(new Set(['media', 'notifications', 'clipboard-read']).has(permission));
  });
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
