var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'TextContent',
    array: true,
    fields: {
        type: {
            tag: 'TextType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        content: {
            tag: 'Text',
            cdata: true
        }
    }
};
