// import the "friends" array from the model file (friends.model.js)
const model = require("../models/friends.model");

//! ---------------- POST /friends ----------------
//! ---------------- POST /friends ----------------
//! ---------------- POST /friends ----------------
//? this function runs when someone sends a POST request to /friends
//? this function runs when someone sends a POST request to /friends
//? this function runs when someone sends a POST request to /friends
// meaning: they want to ADD a new friend
function postFriend(req, res) {
  // if the request body has no "name" property, then return an error
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name", // we send back an error message
    });
  }

  // make a new friend object using data from the request
  const newFriend = {
    name: req.body.name, // name comes from the request
    id: model.length, // id will be the current length of the array, coz we will be adding the new friend at the end
  };

  // add the new friend to the array (our "database")
  model.push(newFriend);

  // sending the same new friend back as an acknowledgement json response
  res.json(newFriend);
}

//! ---------------- GET /friends ----------------
//! ---------------- GET /friends ----------------
//! ---------------- GET /friends ----------------
//? this function runs when someone sends a GET request to /friends
//? this function runs when someone sends a GET request to /friends
//? this function runs when someone sends a GET request to /friends
// meaning: they want to SEE the list of all friends
function getFriends(req, res) {
  // just return the whole array (the "model")
  res.json(model);
}

//! ---------------- GET /friends/:friendId ----------------
//! ---------------- GET /friends/:friendId ----------------
//! ---------------- GET /friends/:friendId ----------------
//? this function runs when someone sends a GET request to /friends/ID
//? this function runs when someone sends a GET request to /friends/ID
//? this function runs when someone sends a GET request to /friends/ID
// meaning: they want to see just ONE specific friend
function getFriend(req, res) {
  // get the friendId from the URL (example: /friends/1 => friendId = "1")
  const friendId = Number(req.params.friendId); // turn it into a number

  // look up that friend in the array
  const friend = model[friendId];

  // if friend exists, send it back
  if (friend) {
    res.status(200).json(friend);
  } else {
    // if friend does not exist, send error
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

// export these functions so routes can use them
module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
