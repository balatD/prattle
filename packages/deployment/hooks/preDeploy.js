const hookUtility = require("./hookUtility");

const commands = [
    // Creates a .env if not present in source folder
    "[ -f .env ] || ln -s ../shared/.env .env"
];

module.exports = hookUtility.createCommandString(commands);