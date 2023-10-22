const postDeployHook = require("../hooks/postDeploy");
const preDeployHook = require("../hooks/preDeploy");

module.exports = {
    "user": "root",
    "host": "168.119.253.96",
    "repo": "git@github.com:balatD/prattle.git",
    "post-deploy": postDeployHook,
    "pre-deploy": preDeployHook
}