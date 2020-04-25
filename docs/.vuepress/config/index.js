const reco = require('./theme/reco.js')
const sidebar = require('./sidebar')
const nav = require('./nav/index')
module.exports = Object.assign({}, reco, {
  sidebar,
  nav
})