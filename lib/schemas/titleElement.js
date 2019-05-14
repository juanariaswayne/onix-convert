var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'TitleElement',
    fields: {
        type: {
            titleText: {
                tag: 'TitleText',
                transform: String,
                cdata: true
            }
        }
    },
    map: {
        to: 'text'
    }
};
