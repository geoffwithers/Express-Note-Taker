const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

// This code creates the get request to this routes end point of: "/api/notes"
router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson);
});

// This code creates the post request to this routes end point of: "/api/notes"
router.post('/api/notes', (req, res) => {
  const databaseJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  databaseJson.push(newNote);
  fs.writeFileSync("db/db.json",JSON.stringify(databaseJson));
  res.json(databaseJson);
});


module.exports = router; 
