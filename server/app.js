import express from "express"
import config from "config"
import "./utils/dbConnect.js"
import masjidRouter from "./controllers/masjids/index.js"


const app=express()
app.use(express.json())
const PORT=config.get("PORT")


app.get("/", (req,res)=>{
try {
    res.status(200).json({msg:"hello world"})
} catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
}
})
app.use("/masjid",masjidRouter)

app.listen(PORT,()=>{
    console.log(`Server is up and listening ${PORT}`);
})