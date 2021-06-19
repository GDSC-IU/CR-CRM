const mongoose = require('mongoose'),
      custSchema = new mongoose.Schema({
        compID: {  
            type: Number, 
            required: true 
        }, 
        custID: {  
            type: Number, 
            required: true 
        }, 
        custName: {  
            type: String, 
            required: true 
        }, 
        custUsername: {  
            type: String, 
            required: true 
        }, 
        custEmail: {  
            type: String, 
            required: true 
        }, 
        custPwd: {  
            type: String, 
            required: true 
        }, 
        dob: {  
            type: Date, 
            required: true 
        }, 
        custAdd: {  
            type: String, 
            required: true 
        }, 
        state: {  
            type: String, 
            required: true 
        }, 
        city: {  
            type: String, 
            required: true 
        }, 
        pincode: {  
            type: Number, 
            minimum: 100000, 
            maximum: 999999, 
            required: true 
        }, 
        custPhn: {  
            type: Number, 
            minimum: 6000000000, 
            maximum: 9999999999, 
            required: true 
        }, 
        custStatus: {  
            type: String, 
            required: true 
        }, 
        joindate: {  
            type: Date, 
            required: true 
        }, 
        activedate: {  
            type: Date, 
            required: true 
        }, 
        endDate: {  
            type: Date, 
            required: true 
        }, 
        assignto: {  
            type: String, 
            required: true 
        }
      });


module.exports = mongoose.model('customer', custSchema);