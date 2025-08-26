// bring in the express library
const express = require("express");

// import all the controller functions (getMessages, postMessage)
const messagesController = require("../controllers/messages.controller");

// make a new router object from express
// router lets us group routes together
//! in the below code, we gonna write many routes, we wanna group all those routes into this router
const messagesRouter = express.Router();

// ------------------- Middleware for this router -------------------
//! currently we don't have any middleware here, but if you want to log IPs or check authentication
//! you could add it here just like in friendsRouter

//! ------------------- Mapping each Route to its respective function in the controller -------------------
//! ------------------- Mapping each Route to its respective function in the controller -------------------
//! ------------------- Mapping each Route to its respective function in the controller -------------------
//! ------------------- Mapping each Route to its respective function in the controller -------------------

// when client sends GET request to /messages
// → call the getMessages function in the controller
messagesRouter.get("/", messagesController.getMessages);

// when client sends POST request to /messages
// → call the postMessage function in the controller
messagesRouter.post("/", messagesController.postMessage);

// export this router so app.js can use it
module.exports = messagesRouter;
