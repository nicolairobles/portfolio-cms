var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
  autokey: { from: 'name', path: 'key', unique: true },
});

Contact.add({
  name: { type: String, required: true },
  email: { type: Types.Email  },
  phoneNumber: { type: String },
  linkedIn: { type: String},
  gitHub: { type: String}

  // publishedDate: { type: Date, default: Date.now },
  // heroImage: { type: Types.CloudinaryImage },
  // images: { type: Types.CloudinaryImages },
});

Contact.defaultColumns = 'name, email, phoneNumber|20%, linkedIn|20%, gitHub|20%';

Contact.register();
