const UserReq = require("../../models/user-request.model")
const { createContactUsReqValidation } = require("../../validators/user.validation")

exports.submitRequest = async (req, res) => {
    //Validation
    const { error } = createContactUsReqValidation(req.body)


    if (error) {
        return (
            res.status(400).send({
                code: 400,
                error: {
                    "status": "Bad reaquest",
                    "message": error.details[0].message
                }
            })
        )
    }

    const request = new UserReq({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contact_no: req.body.contact_no,
        desc: req.body.desc
    });

    console.log('request', request)

    try {
        const addedReq = await request.save();

        res.status(200).send({ success: 'true', addedReq, message: 'Request Added Sucessfull' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}