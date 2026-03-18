const express = require("express");
const app = express(); //express invocato usando variabile app
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Benvenuto nel nostro server dedicato agli amanti del cinema!')
})

app.listen(port, () => {
    console.log(`Express avviato correttamente su http://localhost:${port}/;`)
});