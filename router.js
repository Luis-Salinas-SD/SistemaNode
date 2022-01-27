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
//* Editar Registros
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

//* Crear Registros
router.get('/create', (request, response) => {
    response.render('create');
})

//& Eliminar Registros

router.get('/delete/:id', (request, response) => {
    const id = request.params.id;
    conexion.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            response.redirect('/')
        }
    })
})


const crud = require('./controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)

module.exports = router;


