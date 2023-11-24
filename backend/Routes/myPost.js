const router = require("express").Router();
const itemModel = require("../Models/lostItem")


router.get("/", async (req, res) => {    

    try{
        itemModel.find({userid:req.query.userid}).then(data => {
            res.status(201).send(data)
        }).catch(error => {
            res.status(408).send({ error })
        })
    }catch(error){
        res.send({error})
    }
})
module.exports = router;
