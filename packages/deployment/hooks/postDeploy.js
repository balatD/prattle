// const hookUtility = require("./_hook");

const commands = [
    '. ~/.bashrc',
    'npm install',
    'npm run start'
];

function hookUtility(commands) {
    return commands.join(' && ');
}

const commandString = hookUtility(commands);

module.exports = commandString;