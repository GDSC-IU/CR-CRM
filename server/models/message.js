const mongoose = require('mongoose'),
      msgSchema = new mongoose.Schema({
        custId: {
            type: String,
            required: true
        },
        msgDate: { 
            type: Date, 
            required: true 
        }, 
        msgTitle: { 
            type: String, 
            required: true 
        }, 
        text: { 
            type: String, 
            required: true 
        }, 
        // status: {
        //     type: Boolean 
        // } 
      });



module.exports = mongoose.model('message', msgSchema);
