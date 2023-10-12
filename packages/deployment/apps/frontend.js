module.exports = {
    name: 'frontend',
    cwd: './apps/frontend',
    script: 'node server.js',
    exec_mode: "cluster",
    instances: "max"
};