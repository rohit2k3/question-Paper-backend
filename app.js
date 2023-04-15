const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")
app.use(cors({ 
    origin: "http://127.0.0.1:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
  }));
app.use(express.json());
const errorMiddleware = require('./middleware/error')
app.use(cookieParser());

//config
const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"});

//route
const paperRoute = require("./routes/PaperRoute");
const userRoute = require("./routes/userRoute");
const allDataRoute = require("./routes/allDataRoute");

app.use('/api',paperRoute);
app.use("/api",userRoute);
app.use("/api",allDataRoute);


// middleware for error
app.use(errorMiddleware);


module.exports = app;