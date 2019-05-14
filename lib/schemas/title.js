var _ = require('lodash');
var utils = require('../utils');

var TitleElement = require('./titleElement');

module.exports = {
    tag: 'TitleDetail',
    fields: {
        type: {
            tag: 'TitleType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        titleElement: TitleElement
    }
};
