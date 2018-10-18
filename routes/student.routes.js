const express = require('express');

const router = express.Router();

const Student = require('../model/student.model');

//url: http://localhost:3000/student/
router.post('/add', (req, res, next)=>{
    let std = new Student({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        courses: req.body.courses
    });

    Student.addStudent(std, (err, s)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Failed to add new user'
            })
        }
        else{
            res.json({
                success: true,
                msg: 'Student added'
            }) 
        }
    })
});

router.get('/', (req, res, next)=>{

    Student.find((err, std)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Failed to add new user'
            })
        }
        else{
            console.log(JSON.stringify(std));
        }
    });
});

module.exports = router;