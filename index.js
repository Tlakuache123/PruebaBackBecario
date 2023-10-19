const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3030;

let idFavoritos = [];

app.use(cors());
app.use(express.json());

app.get("/api/favs", (req, res) => {});

app.get("/", (req, res) => {
  res.send({
    favoritos: idFavoritos,
  });
});

app.post("/", (req, res, next) => {
  const { id } = req.body;
  if (id === undefined) {
    next();
  }
  idFavoritos = idFavoritos.concat(id);
  console.log(idFavoritos);
  res.send({ mensaje: "Se agrego a favoritos" }).status(200);
});

app.del("/", (req, res, next) => {
  const { id } = req.body;
  if (id === undefined) {
    next();
  }
  idFavoritos = idFavoritos.filter((v) => v !== id);
  console.log(idFavoritos);
  res.send({ mensaje: "Se elimino a favoritos" }).status(200);
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
