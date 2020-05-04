//section 1 require all the dependencies 
const express = require("express")


const multer = require("multer")
const upload = multer({dest:"./uploads/"})

const port = process.env.PORT || 8080

// section 2 configure express middleware

const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({expended:false}))
app.get("/",(req, res)=>{
    res.sendFile('index.html',{root:__dirname})
})
app.post("/files",upload.array('keyname'),(res,req)=>{
    if(req.file){
        console.log("Uploading file...")
        const filename = req.file.filename
        const uploadStatus = 'File Uploaded Suc'
    }
    if(!req.file){
        console.log("No file uploaded...")
        const filename = "File not uploaded"
        const uploadStatus = "File upload failed"
    }
    res.render("index.html"›port)
})

app.listen(port,()=>{
    console.log(`App is live on port ${port}`)
})