const express = require ("express");
const utils = require("./utils/fetch")

const app=express();
const port = 3000;

app.use(express.json());

utils.fetchAPI("http://www.omdbapi.com/?i=tt3896198&apikey=ecea7d72")


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

