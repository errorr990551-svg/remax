const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api", require("./routes/contactRoutes"));
app.use("/api", require("./routes/complaintRoutes"));
app.use("/api", require("./routes/applicationRoutes"));

module.exports = app;
