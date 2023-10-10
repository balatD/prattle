module.exports = {
    "user": "root",
    "host": "168.119.253.96",
    "repo": "git@github.com:balatD/prattle.git",
    "post-deploy": "nvm use 18 && npm install && npm run build"
};