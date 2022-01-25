//const { response } = require('express');
const conexion = require('../database/db');

exports.save = (request, response) => {
    const user = request.body.user;
    const rol = request.body.rol;

    console.log('Bienvenido' + user + ' ' + rol);
}