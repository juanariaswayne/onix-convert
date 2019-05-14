var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Territory',
    fields: {
        type: {
            tag: 'CountriesIncluded',
            transform: String
        }
    },
    map: {
        to: 'text'
    }
};
