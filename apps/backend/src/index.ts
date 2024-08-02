import  express  from "express";
import {name} from "@repo/common/index"
const app = express()
console.log(name)
app.get("/",(req,res)=>{
  res.json({
    message:"From Home Backend Get Request"+name
  })
})

app.listen(3005)