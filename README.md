A simple **Express.js** web application built with the **MVC architecture**.

# How to get started

gt clone,

npm install,

and npm start

# folder structure

myapp/

├── models/ # Data Layer (contains data / some code connecting to db / some code trying to get specific things from DB)

├── views/ # UI layer (HTML templates like .hbs, .ejs)

├── controllers/ # Logic layer (basically has some functions that uses respective models & return data/views)

├── routes/ # we specify each route and connect them to its respective controller function

├── public/ # Static files (images, CSS, JS for frontend)

├── app.js # Main server entry point
