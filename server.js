const express = require("express");
const app = express();
const mongoose = require("mongoose");
const secret = require("./config/secret");
const cors = require("cors");
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(cors());
app.use("/", require("./routes/index"));

mongoose
	.connect(
		secret.database,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log("Successfully connected to database");
		let server = app.listen(secret.port, function(err) {
			if (err) {
				throw err;
			}
			console.log("Server is running at port: " + secret.port);
		});
	})
	.catch(err => {
		console.log("Unable to connect", err);
	});
