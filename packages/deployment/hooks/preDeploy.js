const hookUtility = require("./hookUtility");

const commands = [
    // Creates a .env if not present in source folder
    "[ -f .env ] || ln -s ../shared/.env .env",
    "[ -f apps/backend/.env ] || ln -s .env apps/backend/.env",
    "[ -f apps/frontend/.env ] || ln -s .env apps/frontend/.env"
];

module.exports = hookUtility.createCommandString(commands);