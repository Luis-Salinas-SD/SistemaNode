const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (request, response) => {
    /*! Conexion MySQL */
    /* conexion.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            response.send(results)
        }
    }) */
    response.render('index', { name: 'Luis Salinas' })
})

module.exports = router;