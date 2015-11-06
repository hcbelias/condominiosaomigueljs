'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');

exports.create = function (req, res) {
  Contact.create(req.body, function (err, contact) {
    if (err) {
      return handleError(res, err);
    }
    res.mailer.send('email', {
      to: 'hcbe2004@gmail.com,alienedecarvalho@gmail.com',
      subject: 'Condomínio São Miguel - Contato',
      name: contact.name,
      email: contact.email,
      message: contact.message,
      phone: contact.phone
    }, function (err) {
      if (err) {
        // handle error
        console.log(err);
      }
    });
    return res.status(201).json(contact);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
//# sourceMappingURL=contact.controller.js.map
