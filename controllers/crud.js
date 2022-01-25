
const conexion = require('../database/db');

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