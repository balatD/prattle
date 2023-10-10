const production = require('./enviroments/production')
const staging = require('./enviroments/staging')
const turborepo = require('./apps/turborepo')

module.exports = {
    apps: [
        turborepo
    ],
    deploy: {
        production: production,
        staging: staging,
    }
};
