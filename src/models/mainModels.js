const mongoose = require('mongoose');

// SCHEMA

const contactMessageSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Contact message must have a first name'],
  },
  surname: {
    type: String,
    required: [true, 'Contact message must have a surname'],
  },
  email: {
    type: String,
    required: [true, 'Contact message must have an email'],
  },
  message: {
    type: String,
    required: [true, 'Contact message must contain a message'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactMessage = mongoose.model('contactMessage', contactMessageSchema);

module.exports = ContactMessage;
