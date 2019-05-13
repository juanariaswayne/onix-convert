var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'SenderIdentifier',
    fields: {
        'senderIDType': {
            tag: 'SenderIDType',
            transform: Number
        },
        'IDTypeName': {
            tag: 'IDTypeName',
            transform: String
        },
        'IDValue': {
            tag: 'IDValue',
            transform: Number
        }
    }
};
