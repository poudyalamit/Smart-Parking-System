import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const API_URL = process.env.ENDPOINT;
const PORT = process.env.PORT || 5000;

console.log("API_URL:", API_URL);  // Debug log to confirm the variable

app.get("/api/parking", async (req, res) => {
  try {
    if (!API_URL) {
      return res.status(500).json({ error: "API_URL is not defined in the .env file" });
    }
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
