var _ = require('lodash');
var utils = require('../utils');

var Publisher = require('./publisher');
var SalesRights = require('./salesRights');

module.exports = {
    tag: 'PublishingDetail',
    array: true,
    fields: {
        publisher: Publisher,
        name: {
            tag: 'PublishingStatus',
            transform: Number,
            default: 4
        },
        salesRights: SalesRights
    }
};
