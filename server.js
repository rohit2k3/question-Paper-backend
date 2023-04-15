const app = require("./app");

//server
const port = process.env.PORT;
const server =  app.listen(port, ()=> console.log(`listening on port number ${port}`));

//database
const db = require("./config/db.js");
db();