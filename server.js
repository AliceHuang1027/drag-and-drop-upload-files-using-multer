
//section 1 require all the dependencies 
const express = require('express')

const multer = require("multer")
const upload = multer({destination:'uploads/'})
// here the destination file we need to write 'uploads/' instead of './uploads/' to make have the uploaded files to go to the right directory.

const port = process.env.PORT || 8080

// section 2 configure express middleware

const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.get("/",(req, res)=>{
res.sendFile("index.html",{root:__dirname})
})
// we have to use keyname[] instead of keyname to match the fieldname key's value inside formData object
app.post("/files",upload.array('keyname[]'),(req, res)=>{
	if(!req.files){console.log("no files")}
	if(req.files){
	console.log(req.files)
	res.sendFile("index.html",{root:__dirname})
}
})
app.listen(port,()=>{
    console.log(`App is live on port ${port}`)
})
