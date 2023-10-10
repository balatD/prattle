// For additional settings look into the packages/deployment folder
const pm2Configuration = require('prattle-deployment/pm2-config');

module.exports = {
    ...pm2Configuration
}