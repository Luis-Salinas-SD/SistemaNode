const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

//! Mostrar Registros
router.get('/', (request, response) => {
    conexion.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            response.render('index', { results: results })
        }
    })

})
//* Crear Registros
router.get('/create', (request, response) => {
    response.render('create');
})

router.get('/edit/:id', (request, response) => {
    const id = request.params.id;
    conexion.query('SELECT * FROM usuarios WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            response.render('edit', { user: results[0] })
        }
    })
})


const crud = require('./controllers/crud');
const req = require('express/lib/request');
router.post('/save', crud.save)

module.exports = router;


