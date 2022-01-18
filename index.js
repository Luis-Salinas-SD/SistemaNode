const express = require('express');
const app = express();

//! Invocar el motor de plantillas EJS
app.set('view engine', 'ejs')

//# Server
app.listen(5000, () => {
    console.log('Runing Server LS | http://localhost:5000');
})

//* Ruta

app.use('/', require('./router'));