



const contact=require('../Skima4/contect')


const Contect= async(req,res)=>{
  
    try {
 
const {name,email,meassage}=req.body
const newusercreate=await contact.create({

name,email,meassage

})

const isdo=res.status(200).json({msg:newusercreate})

    } catch (error) {
        console.log(error)
    }
    
}
module.exports={Contect}















