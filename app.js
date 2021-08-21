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

app.get('/register', (req, res) => {
    const rutaRegistro = path.resolve(__dirname + '/views/register.html');
    res.sendFile(rutaRegistro);
});

app.get('/login', (req, res) => {
    const routeLogin = path.resolve(__dirname + '/views/login.html');
    res.sendFile(routeLogin);
});

app.listen(puerto, () => {
    console.log(`Servidor listo en http://localhost:${puerto}`);
});
