const express = require('express')
const publicRouter = express.Router()
const publicController = require('../controllers/publicController')


//Home Page
publicRouter.route('/')
    .get(publicController.showIndex)
  
  //Show New Entry page
  publicRouter.route('/new-entry')
    .get(publicController.showNewEntry)
    .post(publicController.addNewEntry)


  //Remove an entry
  publicRouter.route('/entry/:id/delete')
    .get(publicController.deleteEntry)

  //Makes available for others
  module.exports = publicRouter

