const router = require("express").Router();
const Request= require("../Models/Requests");


router.post("/", async (req, res) => {
	try {
		
        const newReq = new Request(
            {
                sendid:req.body.sendid,
                userid:req.body.userid,
                name:req.body.name,
                mobileno:req.body.mobileno,
            }   
            
        )
        newReq.save().then(()=>res.status(200).send("uploaded Sucessfully"))
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
