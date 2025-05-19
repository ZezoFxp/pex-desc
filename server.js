const express = require("express");
const bodyParser = require("body-parser");
const handler = require("./pages/api/send.js");

const app = express();
app.use(bodyParser.json());

app.post("/generate-docx", handler);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));