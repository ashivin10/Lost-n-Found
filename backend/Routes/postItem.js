const multer = require("multer")
const router = require("express").Router();
const itemModel = require("../Models/lostItem")

const storage = multer.diskStorage({
    destination: 'upload',
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer
  ({ storage: storage }).single('lostItem');


  router.post("/", async (req, res) => {    
    upload(req,res,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            const newImage = new itemModel(
                {
                    itemName:req.body.itemName,
                    mobileno:req.body.mobileno,
                    location:req.body.location,
                    description:req.body.description,
                    image:
                      req.file.filename,
                }   
                
            )
            newImage.save().then(()=>res.status(200).send("uploaded Sucessfully")).catch((err)=>res.status(409).json({ message : err.message }))
                    if(err)
                    console.log(err);
        }
    })
  })
  
  module.exports = router;
