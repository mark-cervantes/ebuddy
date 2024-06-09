const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const {join} = require('path');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { dirname }  = require("node:path")

const rootDir = dirname(process.argv[1]);

app.use(cors({
	origin: "*", // allow to server to accept request from different origin
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true // allow session cookie from browser to pass through
}))
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(morgan('tiny'))
app.use(express.static(join(__dirname, 'public')))
app.use("/", routes);

app.listen(port, () => {
	console.log(`E-buddy Backend listening on port ${port}`);
});