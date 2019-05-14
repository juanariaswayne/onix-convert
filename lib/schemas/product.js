var _ = require('lodash');
var utils = require('../utils');

var ProductId = require('./productid');
var DescriptiveDetail = require('./descriptiveDetail');
var CollateralDetail = require('./collateralDetail');
var PublishingDetail = require('./publishingDetail');
var ProductSupply = require('./productSupply');


module.exports = {
    tag: 'Product',
    array: true,
    fields: {
        'record': {
            tag: 'RecordReference',
            raw: true
        },
        'notification': {
            tag: 'NotificationType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'id': ProductId,
        'descriptiveDetail': DescriptiveDetail,
        'collateralDetail' : CollateralDetail,
        'publishingDetail': PublishingDetail,
        'productSuply': ProductSupply
    }
}
