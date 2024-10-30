const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
     start_time:{type:String, required:true},
     time_duration:{type:String,required:true}
})

module.exports = mongoose.model('Exam', examSchema);