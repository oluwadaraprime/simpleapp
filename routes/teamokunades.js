var express = require('express');
var router = express.Router();


// Require our controllers.
var teamokunade_controller = require('../controllers/teamokunadeController'); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', teamokunade_controller.create_post); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', teamokunade_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamokunades/create
router.post('/:user_id/teamokunades/create', teamokunade_controller.create_teamokunade_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamokunades/:teamokunade_id/destroy
router.get('/:user_id/teamokunades/:timesheet_id/destroy', teamokunade_controller.delete_user_teamokunade_get);

module.exports = router;