const express=require('express')
const controller=require('./controllers/studentCont')
const gradesController=require('./controllers/gradesCont')
require('./configs/dataBase')
const cors=require('cors')
const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/students',controller)
app.use('/grades',gradesController)
app.listen(8000,
    console.log("start"))
