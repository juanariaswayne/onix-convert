var _ = require('lodash');
var utils = require('../utils');

var SupplyDetail = require('./supplydetail');


module.exports = {
    tag: 'ProductSupply',
    array: true,
    fields: {
        'supplyDetail': SupplyDetail
    }
}
