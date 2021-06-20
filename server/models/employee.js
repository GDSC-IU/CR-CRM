const mongoose = require('mongoose'),
      empLogin = new mongoose.Schema({
        compID: { 
            type: Number, 
            required: true  
        }, 
        roleID: { 
            type: Number, 
            minimum: 1, 
            required: true  
        }, 
        firstName: { 
            type: String, 
            required: true 
        }, 
        lastName: { 
            type: String, 
            required: true 
        }, 
        userName: {
            type: String, 
            required: true 
        },
        pwd: {
            type: String,
            required: true
        },
        email: {  
            type: String, 
            required: true 
        }, 
        phone: {  
            type: Number, 
            minimum: 6000000000, 
            maximum: 9999999999, 
            required: true 
        }, 
        status: { 
            type: String, 
            required: true 
        } 
             
      });

module.exports = mongoose.model('employee', empLogin);