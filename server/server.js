require("dotenv").config();

process.env.SECRET_KEY;

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./config/mongoose.config");

app.use(cookieParser());
app.use(cors({credentials: true}));
app.use(express.json(), express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes");
userRoutes(app);

app.listen(process.env.PORT, () => {
    console.log("The server is all fired up on port", process.env.PORT );
});