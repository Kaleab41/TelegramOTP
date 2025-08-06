import { toNodeHandler } from "better-auth/node";
import auth from "../utils/auth.js";
import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
// const session = require("express-session");
// import session from "express-session";
import cookieParser from "cookie-parser";
const app = express();
const port = 3000;
const Version = "V1";

// app.use(
//   session({
//     secret: process.env.BOT_TOKEN,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false },
//   })
// );

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(cookieParser());
app.get("/", (req: any, res: any) => {
  console.log(req.cookies);
  res.send("Hello");
});

app.use(express.json());

app.post(`/${Version}/RegisterProduct`, isAuthenticated, (req, res) => {
  res.send("Hey");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
