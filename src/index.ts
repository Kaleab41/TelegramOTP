import { toNodeHandler } from "better-auth/node";
import { auth } from "../utils/auth.js";
import express from "express";
const app = express();
const port = 3000;
const Version = "V1";
app.get("/", (req: any, res: any) => {
  res.send("Hello");
});

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.post(`/${Version}/RegisterProduct`, (req, res) => {
  res.send("Hey");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
