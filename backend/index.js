const express = require("express");
const app = express();
const cors = require("cors");
const GameData = require("./GameData.json");

//middleware
app.use(cors());
app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is Running");
});

//Get all Property
app.get("/", async (req, res) => {
  return res.json(GameData);
});

//Find One Property
app.get("/properties/:id", async (req, res) => {
  const id = req.params.id;

  const findProper = GameData.find((a) => a.id === parseInt(id));
  res.json(findProper);
});
