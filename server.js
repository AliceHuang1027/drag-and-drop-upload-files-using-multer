
//section 1 require all the dependencies 
const express = require('express')

const multer = require("multer")
const upload = multer({destination:'./uploads/'})

const port = process.env.PORT || 8080

// section 2 configure express middleware

const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.get("/",(req, res)=>{
res.sendFile("index.html",{root:__dirname})
})
app.post("/files",upload.array('keyname'),(req, res)=>{
	if(!req.files){console.log("no files")}
	if(req.files){
	console.log(req.files)
	res.sendFile("index.html",{root:__dirname})
}
})
app.listen(port,()=>{
    console.log(`App is live on port ${port}`)
})
