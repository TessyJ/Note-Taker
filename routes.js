const fs = require("fs");
const uniqId = require("uniqid");
const router = require("express").Router();


//Get All Notes

router.get('/api/notes', async (req,res) => {

    let data = await fs.readFileSync('./db/db.json','utf-8');
    res.status(200).json(JSON.parse(data))
})

//Add Notes to existing note
router.post('/api/notes', async (req,res) =>{
    let newNote = { ...req.body, id : uniqId() }

    //read existing data and push new note to array
    let data = await fs.readFileSync("./db/db.json", "utf8");
    const dataJson = JSON.parse(data);
    dataJson.unshift(newNote);

    //save new note back to db.json
    await fs.writeFile("./db/db.json", JSON.stringify(dataJson), (err, note) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Success, added a new note");
      res.json(data);
    });


})

module.exports = router