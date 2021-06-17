const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      url = 'mongodb://localhost:27017/crCRM',
      route = require('./routes/users');
    
app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true}).then(() => console.log(`Connected to MongoDB at ${url}`)).catch((err) => console.log(err));

app.listen(8000, () => {console.log(`App started at 8000`)});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control_Allow-Methods', '*');
    next();
});

app.use(route);