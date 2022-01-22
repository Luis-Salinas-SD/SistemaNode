const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_node',
    port: 3306
})

conexion.connect((error) => {
    if (error) {
        console.error('El error es el sigueinte: ' + error);
        return
    }
    console.log('Conectado :D !!!');
})

module.exports = conexion;