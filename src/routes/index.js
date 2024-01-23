const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    // res.send("Home - Bienvenidos TecnoSoluciones g-32");
    res.send('Bienvenidos a mi portafolio')
});

router.get('/about-us', (req, res) => {
    res.send('Sobre nosotros')
})

router.get('/services', (req, res) => {
    res.send('Nuestros servicios cumplen con las mas altas pruebas de estadares')
})

router.get('/services/:id', (req, res) => {
    const { id } = req.params
    //const id = req.params.id
    //console.log(id);
    res.send(`Servicio de id = ${id}`)
})



router.get('/about-me', (req, res) => {
    res.send('Sobre mi')
})

router.get('/projects', (req, res) => {
    res.send('Estos son mis proyectos')
})


router.get('/project_id/:id', (req, res) => {
    // const { id } = req.params
    const id = req.params.id
    res.send(`Este es el proyecto de id = ${id}`)
})





module.exports = router;
