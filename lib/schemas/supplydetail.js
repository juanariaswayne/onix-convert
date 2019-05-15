var _ = require('lodash');
var utils = require('../utils');

var Price = require('./price');
var Supplier= require('./supplier');

module.exports = {
    tag: 'SupplyDetail',
    fields: {
        supplier: Supplier,
        availability: {
            tag: 'ProductAvailability',
            default: 20
        },
        prices: Price
    }
};
