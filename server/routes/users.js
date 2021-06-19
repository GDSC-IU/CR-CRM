const express = require('express'),
      app = express(),
      company = require('../models/company'),
      employee = require('../models/employee'),
      customer = require('../models/customer'),
      message = require('../models/message');




app.post('/comp', async (req, res) => {
    try {
        if (await company.countDocuments() === 0) {
            req.body.compID = 1;
        }
        else {
            const id = await company.findOne({}).sort({compID: -1});
            req.body.compID = id.compID + 1;
        }
        const comp = new company(req.body);
        await comp.save();
        res.send(comp);
    }
    catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});


app.get('/comps', async (req, res) => {
    try {    
        const users = await company.find({});
        res.status(200).send(users);
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});


app.post('/emp', async (req, res) => {
    try {
        const emp = new employee(req.body);
        await emp.save();
        res.send(emp);
    }
    catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});


app.get('/emps', async (req, res) => {
    try {    
        const users = await employee.find({});
        res.status(200).send(users);
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = app;