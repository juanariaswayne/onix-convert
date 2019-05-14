var _ = require('lodash');
var utils = require('../utils');

var TitleDetail = require('./title');
var Contributor = require('./contributor');
var Language = require('./language');
var Subject = require('./subject');

module.exports = {
    tag: 'DescriptiveDetail',
    array: true,
    fields: {
        productFormDetail: {
            tag: 'ProductFormDetail',
            untransform: String,
            default: 'E101'
        },
        epubTechnicalProtection: {
            tag: 'EpubTechnicalProtection',
            untransform: Number,
            default: 03
        },
        titleDetail: TitleDetail,
        contributor: Contributor,
        language: Language,
        subject: Subject
    }
};
