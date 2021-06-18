const express = require('express'),
      app = express(),
      company = require('../models/company'),
      employee = require('../models/employee');


app.post('/comp', async (req, res) => {
    try {
        const comp = new company(req.body);
        await comp.save();
        const e = {"roleID": 1, "firstName": "Admin", "lastName": "Admin", "userName": "Admin", "email": req.body.email, "phn": rew.body.phn, "status": "active"};
        const emp = new employee(e);
        await emp.save();
        res.send(comp);
    }
    catch(error) {
        res.status(500).send(error);
    }
});