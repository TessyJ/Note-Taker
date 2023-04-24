const fs = require("fs");
const uniqId = require("uniqid");
const router = require("express").Router();


//Get All Notes

router.get('/api/notes', async (req,res) => {

    let data = await fs.readFileSync('./db/db.json','utf-8');
    console.log(data)

    res.status(200).json({data})
})

module.exports = router