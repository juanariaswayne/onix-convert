var _ = require('lodash');
var utils = require('../utils');

var Sender = require('./sender');

module.exports = {
    tag: 'Header',
    fields: {
        'from.company': {
            tag: 'FromCompany'
        },
        'from.person': {
            tag: 'FromPerson'
        },
        'from.email': {
            tag: 'FromEmail'
        },
        'sender': Sender,
        'sent': {
            tag: 'SentDate',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        }
    }
};
