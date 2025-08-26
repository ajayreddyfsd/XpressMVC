A simple **Express.js** web application built with the **MVC architecture**.

# How to get started

gt clone,

npm install,

and npm start

# folder structure

myapp/

├── models/ # Data Layer (contains simple json data / some code connecting to db / some code trying to get specific things from the DB)

├── views/ # UI layer (HTML templates like .hbs, .ejs; we also put placeholders in these files, and pass that data through the controller, which is rendering this respective view inside its controller function)

├── controllers/ # Logic layer (basically a group of functions accommodating all possible GET & POST actions. These functions also use respective models & return either json-data/ or render-respective-views)

├── routes/ # we specify each route and connect them to its respective controller function

├── public/ # Static files (images, CSS, JS for frontend)

├── app.js # Main server entry point
