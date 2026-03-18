const express = require("express");
const app = express(); //express invocato usando variabile app
const port = 3000;
const movieRouter = require("./routers/movieRouter");

const errorHandler = require("./middlewares/errorHandlers");
const notFound = require("./middlewares/notFound");

app.use(express.static("public"));

app.use(express.json());

app.get('/', (req, res) => {
  
  res.send('Benvenuto nel nostro server dedicato agli amanti del cinema!')
});

app.use("/api/movies", movieRouter); //inserire "/api/qualcosa" è una convenzione per differenziare le rotte che restituiscono e accettano json

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Express avviato correttamente su http://localhost:${port}/;`)
});