require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express();


// const PORT = 3001;
const PORT = process.env.PORT || 3000;

// Static middleware pointing to the public folder
app.use(express.static("public"));

// Routes list
app.get("/index", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// End Routes List 


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);