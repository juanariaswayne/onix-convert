var _ = require('lodash');
var utils = require('../utils');

var SenderIdentifier = require('./senderIdentifier');

module.exports = {
    tag: 'Sender',
    fields: {
        'senderIdentifier': SenderIdentifier,
        'senderName': {
            tag: 'SenderName',
            transform: String
        }
    }
};
