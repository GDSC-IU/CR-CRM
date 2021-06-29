const mongoose = require('mongoose'),
      msgSchema = new mongoose.Schema({
        compID: {
            type: Number,
            required: true
        },
        custId: {
            type: Number,
            // required: true
        },
        msgDate: { 
            type: Date, 
            required: true 
        }, 
        msgTitle: { 
            type: String, 
            required: true 
        }, 
        msg: { 
            type: String, 
            required: true 
        }, 
      });



module.exports = mongoose.model('message', msgSchema);
