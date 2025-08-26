// bring in the express library
const express = require("express");

// import all the controller functions (postFriend, getFriends, getFriend)
const friendsController = require("../controllers/friends.controller");

// make a new router object from express
// router lets us group routes together
//! in the below code, we gonna write many routes, we wanna group all those routes into this router
const friendsRouter = express.Router();

// ------------------- Middleware for this router -------------------
// this will run for EVERY request to /friends
// it just logs the user's IP address to the console
friendsRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next(); // move on to the actual route handler
});

//! ------------------- Mapping each Route to its respective function in the controller -------------------
//! ------------------- Mapping each Route to its respective function in the controller -------------------
//! ------------------- Mapping each Route to its respective function in the controller -------------------
//! ------------------- Mapping each Route to its respective function in the controller -------------------

// when client sends POST request to /friends
// → call the postFriend function in the controller
friendsRouter.post("/", friendsController.postFriend);

// when client sends GET request to /friends
// → call the getFriends function in the controller
friendsRouter.get("/", friendsController.getFriends);

// when client sends GET request to /friends/:friendId
// (example: /friends/1)
// → call the getFriend function in the controller
friendsRouter.get("/:friendId", friendsController.getFriend);

// export this router so app.js can use it
module.exports = friendsRouter;
