const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

/*! Mostrar Registros*/
router.get('/', (request, response) => {
    conexion.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            //response.send(results)
            response.render('index', { results: results })
        }
    })

})
/* Crear Registros */
router.get('/create', (request, response) => {
    response.render('create');
})


const crud = require('./controllers/crud');
router.post('/save', crud.save)

module.exports = router;


