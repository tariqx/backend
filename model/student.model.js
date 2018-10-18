const mongoose = require('mongoose'), Schema = mongoose.Schema;
const config = require('../config/mongodb')

const StudentSchema = mongoose.Schema({ 
    name: String,
    username: String,
    password: String,
    courses : [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});
 
module.exports = mongoose.model('Student', StudentSchema);

module.exports.addStudent = (newStudent, callback)=>{

    newStudent.save(callback);
}

module.exports.findAll = (std, callback)=>{

    std.find(callback);
}
