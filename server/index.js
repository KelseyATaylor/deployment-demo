const express = require("express");
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

//THIS IS MIDDLEWARE TO SEND WHOLE FOLDER

app.use("/", express.static(path.join(__dirname, "../client/index.html")));

app.use(express.static(path.join(__dirname, "../client")));

//THESE ARE ENDPOINTS TO SEND INDIVIDUAL FILES

// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../client/index.html"));
// });

// app.get("/js", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../client/main.js"));
// });

// For Funzies
// app.post('register', (req, res) => res.status(200).send('Registered'))

app.listen(port, () => {
	console.log("Docked at port " + port);
});
