//$ right now, our model just has some data, which we are also exporting
//! but in a more modern express.js MVC app, we will have here some code that is connecting to DB, defining schemas,
//! and writing functions to fetch the specific data we are looking for from the DB.

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

module.exports = friends;
