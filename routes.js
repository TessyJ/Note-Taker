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
    // move item to first
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

//Delete a Note from existing notes
router.delete('/api/notes/:id', async (req, res) =>{
    let data = await fs.readFileSync("./db/db.json", "utf8");
    const dataJson = JSON.parse(data);

    const newNote = dataJson.filter((note) => {
      return note.id !== req.params.id;
    });

    await fs.writeFile("./db/db.json", JSON.stringify(newNote), (err, note) => {
      if (err) {
        console.log(err);
        return;
      }

      res.status(200).json(newNote);
    });
}
)

module.exports = router