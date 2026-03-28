const express = require("express");
const app = express(); //express invocato usando variabile app
const cors = require("cors");
const movieRouter = require("./routers/movieRouter");

const errorHandler = require("./middlewares/errorHandlers");
const notFound = require("./middlewares/notFound");

app.use(cors({ origine: process.env.FE_URL })); /*cors è un middleware che permette di gestire le richieste da domini diversi,
                                                 in questo caso il frontend che gira su un dominio diverso da quello del backend */
app.use("/static/",express.static("public"));

app.use(express.json());

app.get('/', (req, res) => {
  
  res.send('Benvenuto nel nostro server dedicato agli amanti del cinema!')
});

app.use("/api/movies", movieRouter); //inserire "/api/qualcosa" è una convenzione per differenziare le rotte che restituiscono e accettano json

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
    console.log(`Express avviato correttamente su http://localhost:${process.env.APP_PORT}/;`)
});