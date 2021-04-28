 const express =require("express")
const dotenv = require("dotenv")
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const foodRouter = require("./router/foodRouter");
const usersRouter = require("./router/usersRouter");

dotenv.config()

const app =express()

//connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/food", foodRouter);
app.use("/api/v1/users", usersRouter);

//home route
app.get("/",(req, res) => {
    res.send("welcom come to my restaurant menu list")
});

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`server is run on ${port}`));