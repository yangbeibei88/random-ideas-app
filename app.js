import express from "express";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { router as ideasRouter } from "./routes/ideas.js";
import { connectDB } from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 8080;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// hook the path to ideasEouter
app.use("/api/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
