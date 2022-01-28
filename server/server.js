require("dotenv").config();

console.log(process.env.SECRET_KEY);

const express = require("express");
const app = express();
const cors = require("cors");
// const cookieParser = require("cookie-parser");

require("./config/mongoose.config");

// app.use(cookieParser());
// app.use(cors({withCredentials: true}));
app.use(cors());

// app.all('*', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// });

app.use(express.json(), express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes");
userRoutes(app);
const motoRoutes = require("./routes/moto.routes");
motoRoutes(app);

app.listen(process.env.PORT, () => {
    console.log("The server is all fired up on port", process.env.PORT );
});