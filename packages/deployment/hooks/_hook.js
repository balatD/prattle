module.exports = {
    concateCommand: (commands) => {
        return commands.join(' && ');
    },
    debugCommand: (commands) => {
        console.log(commands.join(' && '));
    }
};