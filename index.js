require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use("/", (req, res) => {
	res.send("Main route hit");
});
app.listen(PORT, () => {
	console.log(`[server] running on 4000`);
});
