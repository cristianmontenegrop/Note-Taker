var notesData = require("../data/db.json");


module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(notesData);
    console.log("get method executed")
  });



  app.post("/api/notes", function (req, res) {

    newNote = req.body;
    newNote.id = notesData.length + 1;
    notesData.push(newNote);
    console.log(newNote);
    res.json(true);
    console.log("post method executed")
  });


  app.delete("/api/notes/:id", function (req, res) {

    const id = req.params.id;

    console.log("id= " + id);
    console.log(req.params);

    for (i = 0; i < notesData.length; i++) {
      console.log("i=" + i);
      console.log("notesData[i].id=" + notesData[i].id);
      if (notesData[i].id == id) {
        console.log("IF EXECUTED!")
        notesData.splice(i, 1);
      }
    }

    res.json({
      ok: true
    });
    console.log("delete method executed")
  });



};