const mongoose = require('mongoose')


const userRequestSchema = new mongoose.Schema({

    fname: {
         type : String,
         required: true,
    },
    lname:{
        type : String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    contact_no:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('user-request' , userRequestSchema)