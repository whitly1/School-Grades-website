let students=require('./studentModel')
function getAllStudents(){
    return new Promise((resolve)=>{
        students.find({},(err,data)=>{
            if(err){
                console.log(err)
            }else{resolve (data)}
        })
    })
}


function getById(id){
return new Promise((resolve)=>{
    students.findById(id,(err,data)=>{
        if(err){console.log(err)}
        else{resolve (data)}
    })
})
}

function updateStudent(id,studentToUpdate){
return new Promise((resolve)=>{
    students.findByIdAndUpdate(id,{
        FullName:studentToUpdate.FullName,
        email:studentToUpdate.email,
        Faculty:studentToUpdate.Faculty,
        BirthDate:studentToUpdate.BirthDate,
        Grades:studentToUpdate.Grades
    },err=>{if(err){console.log(err)}
else{resolve ("updated")}})
})

}
function createStudent(newStudent){
    return new Promise((resolve)=>{
        let studentToSave=new students({
            FullName:newStudent.FullName,
            email:newStudent.email,
            Faculty:newStudent.Faculty,
            BirthDate:newStudent.BirthDate,
            Grades:newStudent.Grades 
        })
        studentToSave.save(err=>{if(err){console.log(err)}
    else{resolve (studentToSave)}})
    })
}

function deleteStudent(id){
    students.findByIdAndDelete(id,err=>
        {if(err){
            console.log(err)}
        else{
            return ("student deleted")
        }})
}
module.exports={getAllStudents,getById,updateStudent,createStudent,deleteStudent}