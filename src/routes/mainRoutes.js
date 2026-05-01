const express = require('express');
const mainControllers = require('../controllers/mainControllers');
const router = express.Router();

router.route('/').get(mainControllers.getCV);

router
  .route('/contact')
  .get(mainControllers.getContactForm)
  .post(mainControllers.createMessage);

router.route('/messages').get(mainControllers.getAllMessages);

module.exports = router;
