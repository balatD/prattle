const hookUtility = require("./hookUtility");

const commands = [
    '. ~/.bashrc',
    'npm install',
    'npm run build',
    'npm run start'
];

module.exports = hookUtility.createCommandString(commands);