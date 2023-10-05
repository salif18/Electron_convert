const { app , BrowserWindow } = require('electron')
const {isDev } = require('electron-is-dev')

const createWindow =()=> {
    const win = new BrowserWindow({
        width:800,
        height:600
    });
    if(isDev){
       win.loadFile("app/build/index.html")
    }else{
       win.loadURL('http://localhost:3000')
      
    }
}

app.whenReady().then(()=>{
    createWindow()
})