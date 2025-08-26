//$ this is the main 'server.js' file! which is the entry point to our application
//$ this is the main 'server.js' file! which is the entry point to our application
//$ this is the main 'server.js' file! which is the entry point to our application

// bring in express library
const express = require("express");
// bring in path library for working with file/folder paths
const path = require("path");

// import routers for friends and messages features
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

// create the main express app
const app = express();

//! ------------------- View engine setup -------------------
//! ------------------- View engine setup -------------------
//! ------------------- View engine setup -------------------
//$ basically we are telling the app, which file extensions to use for html templates (.hbs in this case)
//$ and also, where to find those files
// set Handlebars (hbs) as the view engine
app.set("view engine", "hbs");
// set the folder where all views (templates) are located
app.set("views", path.join(__dirname, "views"));

//! ------------------- Middleware -------------------
//! ------------------- Middleware -------------------
//! ------------------- Middleware -------------------
// this middleware runs for EVERY request
// it measures the time taken to handle the request and logs it
//$ this is the middleware function. for every route, first we get to this, say hi and do something,
//$ then continue to our route, once done with the route work,
//$ we once again visit this, say bye and do something and leave.
app.use((req, res, next) => {
  const start = Date.now();
  next(); // continue to the next middleware/route
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//! ------------------- Routes -------------------
//! ------------------- Routes -------------------
//! ------------------- Routes -------------------

//? this statement is crucial for post and put requests
//? basically helps in converting json string to json object
app.use(express.json());

//? defining the route for home page and also passing some custom data to the view which is being rendered
//? defining the route for home page and also passing some custom data to the view which is being rendered
//? defining the route for home page and also passing some custom data to the view which is being rendered
// Home page route (GET /)
app.get("/", (req, res) => {
  // render the 'index' view and send some dynamic data
  res.render("index", {
    title: "My Friends Are VERYY Clever", // fills {{title}} in the view
    caption: "Let's go skiing!", // fills {{caption}} in the view
  });
});

// use the friendsRouter for all routes starting with /friends
app.use("/friends", friendsRouter);

// use the messagesRouter for all routes starting with /messages
app.use("/messages", messagesRouter);

// serve static files (CSS, images, JS) from the 'public' folder under /site URL
//? any request starting with /site will look for the matching file in public folder
//? example: /site/css/style.css → ./public/css/style.css
app.use("/site", express.static(path.join(__dirname, "public")));

//! ------------------- Starting the server -------------------
//! ------------------- Starting the server -------------------
//! ------------------- Starting the server -------------------
// set the port the server will listen on
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
