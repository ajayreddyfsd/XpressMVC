// bring in the built-in Node.js 'path' module
//! this helps us work with file/folder paths safely
const path = require("path");

// ------------------- GET /messages -------------------
// this function runs when someone visits /messages (GET request)
// it sends a rendered view (HTML page) to the user
function getMessages(req, res) {
  // render the 'messages' view (messages.hbs / messages.ejs)
  // we also send some data to that view: title and friend
  res.render("messages", {
    title: "Messages to my Friends!", // this will appear in the page
    friend: "Elon Musk", // example friend name to show in the page
  });

  // example of sending a static file (like an image) instead of a view
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
  //! currently commented out, just showing you an alternative
}

// ------------------- POST /messages -------------------
// this function runs when someone sends a POST request to /messages
// right now it just logs a message to the console
function postMessage(req, res) {
  console.log("Updating messages...");
  //! in real apps, here you would save the message to the database
}

// export the functions so the router can use them
module.exports = {
  getMessages,
  postMessage,
};
