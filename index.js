// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

let newPort = 3000

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



app.get("/api/date?",(req,res)=>{
  let { date } = req.params;

  if (date) {
    // Check if the provided date is valid
    let parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      // If the parsed date is invalid, return the error object
      res.json({ error: "Invalid Date" });
    } else {
      // If the parsed date is valid, return the Unix timestamp and UTC string
      res.json({ unix: parsedDate.getTime(), utc: parsedDate.toUTCString() });
    }
  } else {
    // If the date parameter is empty, return the current time
    let now = new Date();
    res.json({ unix: now.gegit stTime(), utc: now.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
