'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    phone: String
});

module.exports = mongoose.model('Contact', ContactSchema);
//# sourceMappingURL=contact.model.js.map
