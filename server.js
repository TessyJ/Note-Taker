require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express();


// const PORT = 3001;
const PORT = process.env.PORT || 3000;

// Static middleware pointing to the public folder
app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);