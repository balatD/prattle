module.exports = {
    name: 'backend',
    cwd: './apps/backend',
    script: 'node server.js',
    exec_mode: "cluster",
    instances: "max"
};