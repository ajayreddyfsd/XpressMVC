A simple **Express.js** web application built with the **MVC architecture**.

# How to get started

git clone,

npm install,

and npm start

# folder structure

myapp/

├── models/ # Data Layer (contains simple json data / some code connecting to db / some code trying to get specific things from the DB)

├── views/ # UI layer (HTML templates like .hbs, .ejs; we also put placeholders {{}} in these files, and pass that data through the controller, which is rendering this respective view inside its controller function)

├── controllers/ # Logic layer (basically a group of functions accommodating all possible GET & POST actions. These functions also use respective models & return either json-data/ or render-respective-views)

├── routes/ # we specify each route and connect them to its respective controller function

├── public/ # Static files (images, CSS, JS for frontend)

├── server.js # this is the main entry point to the application, we render the index.hbs view in this, we also code middlewares inside this, and, we set up the routes once and for all and we also start the server

# also tested the post requests of /friends and /messages using postman



Controllers and routers go hand in hand because the controller functions return JSON, text, files, or HTML pages (sometimes they also render views). We then couple each controller function with a specific route, and organize all those routes inside a router file. Finally, in server.js, we mount those routers on specific paths/routes again. so the server knows which router to use.
