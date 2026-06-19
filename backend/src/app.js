const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { MessageRouter } = require("./routes/messageRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/messages", MessageRouter);
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;
