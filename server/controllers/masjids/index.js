import express from "express";
import masjidModel from "../../models/Masjids/Masjid.js";
const router = express.Router();

router.get("/getall", async (req, res) => {
  try {
    let getall = await masjidModel.find({});
    if (getall == 0) {
      return res.status(400).json({ msg: "sorry" });
    }
    res.status(200).json(getall);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getone/:id", async (req, res) => {
 try {
    let masjidId =req.params.id
    let masjidData=await masjidModel.findOne({_id:masjidId})
    res.status(200).json({masjidData})
 } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
 }
});


router.put("/updateone/:id",async (req,res)=>{
try {
    let masjidId=req.params.id
    let masjidData=req.body
    await masjidModel.updateOne({_id:masjidId},{$set:masjidData})
    res.status(200).json({msg:"updated successfully"})


} catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
}
})


router.delete("/deleteone/:id",async (req,res)=>{
    try {
        let deleteone=req.params.id
        await masjidModel.deleteOne({_id:deleteone})
        res.status(200).json({msg:"deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deleteall",async (req,res)=>{
    try {
        await masjidModel.deleteMany({})
        res.status(200).json({msg:"db deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})

router.post("/createmasjid", async (req, res)=>{
    try {

        let userInp = req.body

        await masjidModel.create(userInp);
        console.log(userInp);
        res.status(200).json({msg: `masjid  created `})
        
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: error})
    }
})

export default router