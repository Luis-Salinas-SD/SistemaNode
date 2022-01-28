
const { request, response } = require('express');
const conexion = require('../database/db');

//!Agregar
exports.save = (request, response) => {
    const user = request.body.user;
    const rol = request.body.rol;

    conexion.query('INSERT INTO usuarios SET ?', { usuario: user, rol: rol }, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            response.redirect('/')
        }
    })
}

//*Actualizar

exports.update = (request, response) => {
    const id = request.body.id;
    const user = request.body.user;
    const rol = request.body.rol;

    conexion.query('UPDATE usuarios SET ?  WHERE id = ?', [{ usuario: user, rol: rol }, id], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            response.redirect('/');
        }
    })
}