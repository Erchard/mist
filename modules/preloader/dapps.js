/**
@module preloader dapps
*/
const ipc = require('electron').ipcRenderer;
const mist = require('../mistAPI.js');
require('../openExternal.js');
const shell = require('shell');
const BigNumber = require('bignumber.js');
const ipcProviderWrapper = require('../ipc/ipcProviderWrapper.js');
var Web3 = require('web3');
require('../getFavicon.js');


// notifiy the tab to store the webview id
ipc.sendToHost('setWebviewId');

// destroy the old socket
ipc.send('ipcProvider-destroy');


window.mist = mist();
window.BigNumber = BigNumber;
window.web3 = new Web3(new Web3.providers.IpcProvider('', ipcProviderWrapper));

// prevent overwriting the Dapps Web3
delete global.Web3;
delete window.Web3;