import { app, BrowserWindow } from "electron";
import type { BrowserWindowConstructorOptions } from "electron";
import path from "path";

const isDevelopment = !app.isPackaged;

function createWindow() {
    const mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    // window.addEventListener("contextmenu", e => {
    //     e.preventDefault();
    //     ipcRenderer.send("show-context-menu");
    // });

    // ipcRenderer.on("context-menu-command", (e, command) => {
    //     // ...
    // });

    // contextMenu({
    //     showSearchWithGoogle: false,
    //     showCopyImage: false,
    //     prepend: (defaultActions, params, browserWindow) => [
    //         {
    //             label: "its like magic 💥"
    //         }
    //     ]
    // });

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
        mainWindow.focus();
    });

    if (isDevelopment) {
        const port = process.env.PORT || 3000;
        void mainWindow.loadURL(`http://localhost:${port}`);
    } else {
        void mainWindow.loadFile("./index.html");
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
    createWindow();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
