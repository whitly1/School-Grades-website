let gradesBl=require('../models/gradesBl')
const express=require('express')
const router=express.Router()
// create new grade

router.route('/:id').post(async(req,resp)=>{
    let studentId=req.params.id
    let newGrade=req.body
    let data=await gradesBl.createGrade(studentId,newGrade)
    return resp.json(data)
})
// update grade

router.route('/:id/:gradeId').put(async(req,resp)=>{
    let studentId=req.params.id
    let gradeId=req.params.gradeId
    let newGrade=req.body
    let updatedGrade=await gradesBl.updateGrades(studentId,gradeId,newGrade)
    return resp.json(updatedGrade)
})
// delete grade
router.route('/:id/:gradeId').delete(async(req,resp)=>{
    let studentId=req.params.id
    let gradeId=req.params.gradeId
   let status= await gradesBl.deleteGrade(studentId,gradeId)
   return resp.json(status)
})

module.exports=router;
