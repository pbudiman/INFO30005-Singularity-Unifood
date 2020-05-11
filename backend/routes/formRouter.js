const express = require('express');

// add our router
const formRouter = express.Router();

// require the form controller
const formController = require('../controller/formController.js');

// handle the GET request on root of form-management path,
formRouter.get('/', function(req, res, next) {
    res.render('formIndex');
});


// posting a new form
formRouter.get('/createForm', function(req, res, next) {
    res.render('createNewForm');
});
formRouter.post("/createForm", formController.createForm);


// updating a form
formRouter.get('/updateForm', function(req, res, next) {
    res.render('formUpdate');
});
formRouter.post("/updateForm", formController.updateForm);


// delete a form
formRouter.get('/deleteForm', function(req, res, next) {
    res.render('formDelete');
});
formRouter.post("/deleteForm", formController.deleteForm);


// getting list of all users
formRouter.get("/formList", formController.getAllForms);

// export the router
module.exports = formRouter;