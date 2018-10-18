const express = require('express'); //import express package
const path = require('path'); //import path package 
const bodyParser = require('body-parser'); //import path package 
const mongoose = require('mongoose');
const config = require('./config/mongodb');


const app = express(); //initialize express object

const port = 3000;

mongoose.connect(config.database, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', ()=>{
    console.log('connected to ' + config.database);
})

mongoose.connection.on('error', (err)=>{
    console.log('connetion error ' + err);
})

//reference custom routes
const studentRt = require('./routes/student.routes');
const courseRt = require('./routes/course.routes');

//body parser
app.use(bodyParser.json());

//use routes...
app.use('/student', studentRt);
app.use('/course', courseRt);


//intercept root path
app.get('/', (req, res) =>{
    res.send('this is working');
})

//setup server's listener
app.listen(port, ()=>{
    console.log('server running on port ' + port);
});


