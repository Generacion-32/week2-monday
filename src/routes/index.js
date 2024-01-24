const express = require('express');
const router = express.Router();
const services = require('../services.json')
const projects = require('../projects.json')

// colocar las rutas aquí
router.get('/', (req, res) => {
    // res.send("Home - Bienvenidos TecnoSoluciones g-32");
    res.render('home')
});

router.get('/about-us', (req, res) => {
    res.render('about-us')

})

router.get('/services', (req, res) => {
    //console.log(services);
    res.render('services', { services })
})

router.get('/services/:id', (req, res) => {
    const { id } = req.params
    //const id = req.params.id
    //console.log(id);
    // res.send(`Servicio de id = ${id}`)
    res.render('service-id', { id })
})



router.get('/about-me', (req, res) => {
    res.render('about-me')
})

router.get('/projects', (req, res) => {
    //console.log(projects);
    res.render('projects', { projects })
})


router.get('/project_id/:id', (req, res) => {
    // const { id } = req.params
    const id = req.params.id
    res.render('project_id', { id })
})





module.exports = router;
