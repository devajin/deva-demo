const path = require('path')

module.exports = (env) => {
    let clientPath = path.resolve(__dirname, 'src/main/client');
    let outputPath = path.resolve(__dirname, 'out');

    return {
        mode: !env ? 'development' : env,
        entry: {
            index: clientPath + '/index.js'
        },
        output: {
            path: outputPath,
            filename: '[name].js'
        }
    }
}