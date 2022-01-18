const express = require('express');
const router = express.Router();

router.get('/contact', (request, response) => {
    response.send('Contactos')
})

module.exports = router;