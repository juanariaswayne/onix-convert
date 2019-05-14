var _ = require('lodash');
var utils = require('../utils');

var Territory = require('./territory');

module.exports = {
    tag: 'SalesRights',
    array: true,
    fields: {
        salesRightsType: {
            tag: 'SalesRightsType',
            untransform: Number,
            default: 1
        },
        territory: Territory
    }
};
