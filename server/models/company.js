const mongoose = require('mongoose'),
      compSchema = new mongoose.Schema({
        compID: { 
            type: Number, 
            // required: true 
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
        compPhn: { 
            type: Number, 
            minimum: 6000000000, 
            maximum: 9999999999, 
            required: true 
        }, 
        website: String,
        status: Boolean
      });



module.exports = mongoose.model('company', compSchema);
