


const express=require('express')
const authmidelw=require('../mideleware/Auth-midelware')
const router=express.Router()
const authrouter=require('../constralers/control-auth')
const contect=require('../message/message')
const control=require('../constrolar/auth-controlar')
 router.route("/con").post(contect.Contect)
 //router.route('/change').get(authrouter.pagechange)
router.route("/reg").post(control.regestation)
router.route("/log").post(control.login)
router.route("/meas").post(control.Meassage)

module.exports=router



