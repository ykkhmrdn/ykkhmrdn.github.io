const express = require('express')
const contactRoute = express.Router();
const contactController = require('../controllers/contactController')

contactRoute.get('/datacontact', contactController.getAllcontact)
contactRoute.post('/', contactController.createcontact)

module.exports = { contactRoute }