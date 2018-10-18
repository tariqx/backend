const mongoose = require('mongoose'), Schema = mongoose.Schema;
const config = require('../config/mongodb')

const CourseSchema = mongoose.Schema({
    name: { type: String, unique: true }, 
    subject: { type: String}
    //students : { type: Schema.Types.ObjectId, ref: 'Student' }
    
});
 
module.exports = mongoose.model('Course', CourseSchema);

module.exports.addCourse = (newCourse, callback)=>{
    newCourse.save(callback);
}