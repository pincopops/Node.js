//importiamo la libreria express che serve per far funzionare il server
import express from "express";
import "express-async-errors";

//creiamo una istanza di express assegnando l'esecuzione ad "app"
const app = express();

app.get("/", (request, response) => {
    response.send("Up and running!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});