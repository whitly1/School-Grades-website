let students = require('./studentModel')
let studentsBl = require('./studentsBl')
function createGrade(id, newGrade) {
    return new Promise((resolve) => {
        newGrade = {
            id: newGrade.id,
            DateOfExam: newGrade.DateOfExam,
            Grade: newGrade.Grade
        };
        students.findById(id, (err, data) => {
            if (err) { console.log(err) }
            else {
                data.Grades.push(newGrade)
                data.save(err => {
                    if (err) { console.log(err) } else {
                        resolve(newGrade)
                    };
                })
            }
        })
    })
}


async function updateGrades(id, gradeId, newGrades) {
    let student = await studentsBl.getById(id);
    let grade = student.Grades.findIndex(grade => grade._id == gradeId);
    student.Grades[grade] = newGrades;
    student.Grades[grade]._id = gradeId;
    let data = await studentsBl.updateStudent(id, student);
    return new Promise((resolve) => {
        resolve(data)
    })
}

// delete 

// async function deleteGrade(id,gradeId){
//     let student=await studentsBl.getById(id)
//    let grade=student.Grades.findIndex(grade=>grade._id==gradeId)
//    student.Grades.splice(student.Grades[grade],1)
// }

module.exports = { createGrade, updateGrades }














