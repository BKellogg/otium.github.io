const defaultConfig = require('./webpack.config');
const _ = require('lodash');
const path = require('path');

const config = {
    output: {
        path: path.join(__dirname, 'build-dev/assets'),
    },
    devtool: 'cheap-eval-source-map'
}

module.exports = _.mergeWith({}, defaultConfig, config, function(obj, src) {
    if (_.isArray(obj)) {
        return obj.concat(src);
    }
});
