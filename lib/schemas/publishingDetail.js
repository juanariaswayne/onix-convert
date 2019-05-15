var _ = require('lodash');
var utils = require('../utils');

var Publisher = require('./publisher');
var SalesRights = require('./salesRights');

module.exports = {
    tag: 'PublishingDetail',
    array: true,
    fields: {
        publisher: Publisher,
        status: {
            tag: 'PublishingStatus',
            transform: Number,
            default: 4
        },
        salesRights: SalesRights
    }
};
