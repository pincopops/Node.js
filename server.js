"use strict";
exports.__esModule = true;
//importiamo la libreria express che serve per far funzionare il server
var express = require("express");
require("express-async-errors");
//creiamo una istanza di express assegnando l'esecuzione ad "app"
var app = express();
app.get("/", function (request, response) {
    response.send("Up and running!");
});
var port = 3000;
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
