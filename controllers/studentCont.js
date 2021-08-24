const express=require('express')
const studentsBl=require('../models/studentsBl')
const router=express.Router();

router.route('/').get(async(req,resp)=>{
    let data=await studentsBl.getAllStudents()
    return resp.json(data)
})
router.route('/:id').get(async(req,resp)=>{
    let id=req.params.id
    let data=await studentsBl.getById(id)
    return resp.json(data)
})
router.route('/:id').put(async(req,resp)=>{
    let newStudent=req.body
    let id=req.params.id
    let data=await studentsBl.updateStudent(id,newStudent)
    return resp.json(data)
})
router.route('/').post(async(req,resp)=>{
    let newStudent=req.body
    let data=await studentsBl.createStudent(newStudent)
    return resp.json(data)
})
router.route('/:id').delete(async(req,resp)=>{
    let id=req.params.id
   let status=await studentsBl.deleteStudent(id)
   return resp.json(status)
})
module.exports = router;