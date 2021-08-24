const mongoose=require('mongoose')

let studentSchema=new mongoose.Schema({
    FullName:String,
    email:String,
    Faculty:String,
    BirthDate:Date,
    Grades:[{
        id:Number,
        DateOfExam:Date,
        Grade:Number }]
})

module.exports=mongoose.model('students',studentSchema)