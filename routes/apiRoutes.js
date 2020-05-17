// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesData = require("../data/db.json");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    res.json(notesData);
    console.log("get method executed")
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (tableData.length < 5) {
    newNote = req.body;
    newNote.id = notesData.length + 1;
    notesData.push(newNote);
    console.log(newNote);
    res.json(true);
    console.log("post method executed")

    // }
    // else {
    // waitListData.push(req.body);
    // res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

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