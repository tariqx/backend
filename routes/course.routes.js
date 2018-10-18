const express = require('express');

const router = express.Router();

const Course = require('../model/course.model');

//url: http://localhost:3000/course/
router.get('/init', (req, res, next)=>{
    let cr1 = new Course({
        name: "Algebra_101",
        subject: "Math"
    });

    Course.addCourse(cr1, (err, s)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Failed to add new Course'
            })
        }
        else{
            res.json({
                success: true,
                msg: 'Course added'
            }) 
        }
    })

    let cr2 = new Course({
        name: "Chemistry101",
        subject: "Science"
    });

    Course.addCourse(cr2, (err, s)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Failed to add new Course'
            })
        }
        else{
            res.json({
                success: true,
                msg: 'Course added'
            }) 
        }
    });

    let cr3 = new Course({
        name: "Spanish101",
        subject: "Language"
    });

    Course.addCourse(cr3, (err, s)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Failed to add new Course'
            })
        }
        else{
            res.json({
                success: true,
                msg: 'Course added'
            }) 
        }
    })

 });

router.post('/', (req, res, next)=>{
    let cr = new Course({
        name: req.body.name,
        subject: req.body.subject
    });

    Course.addCourset(std, (err, s)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Failed to add new Course'
            })
        }
        else{
            res.json({
                success: true,
                msg: 'Course added'
            }) 
        }
    })
});

module.exports = router;