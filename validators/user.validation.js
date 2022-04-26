const Joi = require('@hapi/joi')

const options = {
    errors: {
      wrap: {
        label: ''
      }
    }
  };


const createContactUsReqValidation = (data) => {
  const schema = Joi.object(
      {
          fname: Joi.string().required(),
          lname: Joi.string().required(),
          email: Joi.string().required(),
          contact_no: Joi.date().required(),
          desc : Joi.required(),
   
      }
  )

  return schema.validate(data , options)

}

module.exports.createContactUsReqValidation = createContactUsReqValidation

