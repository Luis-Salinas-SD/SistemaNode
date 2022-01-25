const express = require('express');
const app = express();

//! Invocar el motor de plantillas EJS
app.set('view engine', 'ejs')

//! Establecer el como recibir variablñes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Ruta
app.use('/', require('./router'));

//# Server
app.listen(5000, () => {
    console.log('Runing Server LS | http://localhost:5000');
})
