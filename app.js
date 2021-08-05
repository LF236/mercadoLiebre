const express = require('express');
const path = require('path');

const app = express();
const puerto = 3000;

const public_path = path.resolve(__dirname + '/public');

app.use( express.static(public_path) );

app.get("/", (req, res) => {
    const rutaRaiz = path.resolve(__dirname + '/views/home.html');
    res.sendFile(rutaRaiz);
});

app.listen(puerto, () => {
    console.log(`Servidor listo en http://localhost:${puerto}`);
});
