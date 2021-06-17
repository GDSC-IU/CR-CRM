const mongoose = require('mongoose'),
      loginSchema = new mongoose.Schema({
        compID: { 
            type: Number, 
            required: true 
        }, 
        compName: { 
            type: String, 
            required: true 
        }, 
        compEmail: { 
            type: String, 
            required: true 
        }, 
        compTitle: { 
            type: String, 
            required: false 
        }, 
        compAdd: { 
            type: String, 
            required: true 
        }, 
        compPhone: { 
            type: Number, 
            minimum: 6000000000, 
            maximum: 9999999999, 
            required: true 
        }, 
        website: { 
            type: String, 
            required: false 
        },
        status: {
            type: Boolean 
        } 
      });



module.exports = mongoose.model('company', loginSchema);
