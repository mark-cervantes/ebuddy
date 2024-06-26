import express from "express";
import bodyParser from "body-parser";
import routes from "./routes.js";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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