const hookUtility = require("./_hook");

const commands = [
    '. ~/.bashrc',
    'npm install',
    'npm run start'
];

// const commandString = hookUtility.concateCommand(commands);

module.exports = hookUtility.concateCommand(commands);