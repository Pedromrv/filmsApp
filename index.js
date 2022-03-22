const express = require("express");
const router = express.Router()
const filmRouter = require("./routes/films");
const utils = require ("./utils/fetch");
const films = require("./controllers/films");

const app = express();
const port = 3000;

app.use(express.json());


app.use("/api", filmRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/* [PUT] http://localhost:3000/api/film/ Actualiza los datos de una película y retorna un status 200. Payload {id:"0", message: "Se ha actualizado Titanic"}
 */
