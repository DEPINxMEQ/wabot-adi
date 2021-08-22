const os = process
global.DeveloperMode = 'false' //true Or false
global.owner = ['12403895524', '628871746203'] || os.env["OWNER_NUMBER"]// Put your number here
global.linkGC = ['https://chat.whatsapp.com/HtupgW2zN9C6aNzktp3bX9']
global.mods = ['12403895524', '628871746203'] // Want some help?
global.prems = ['12403895524', '628871746203'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': os.env["API_KEY"],
  'https://recoders-area.caliph.repl.co': 'FreeApi',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': os.env["API_KEY_ZEKS"]
}

// Sticker WM
global.packname = 'Sticker Dari meqi bot '
global.author = 'No. +628871746203'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
