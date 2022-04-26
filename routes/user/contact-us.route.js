const router = require('express').Router();
const contactUsController = require('../../controllers/user/contact-us.controller');


router.post('/submit-req' , contactUsController.submitRequest)
// router.put('/update-employee' , is_auth,  empController.updateEmp)
// router.delete('/delete-employee' , is_auth,  empController.deleteEmp)

module.exports = router