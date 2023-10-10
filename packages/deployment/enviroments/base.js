module.exports = {
    "user": "root",
    "host": "168.119.253.96",
    "repo": "git@github.com:balatD/prattle.git",
    "post-deploy": ". ~/.bashrc && npm install && npm run build"
};