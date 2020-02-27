const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./event/router");
//
const express = require("express");
const app = express();
//
const middleware = cors();
app.use(middleware);
//
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);
//
const port = 4000;
const db = require("./db");
const Event = require("./event/model");
//
app.use(router);
//
app.listen(port, () => console.log("App running on port:", port));
