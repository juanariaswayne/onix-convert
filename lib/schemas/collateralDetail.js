var _ = require('lodash');
var utils = require('../utils');

var TextContent = require('./textContent');

module.exports = {
    tag: 'CollateralDetail',
    array: true,
    fields: {
        textContent: TextContent
    }
};
