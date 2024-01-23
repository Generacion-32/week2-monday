const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    // res.send("Home - Bienvenidos TecnoSoluciones g-32");
    res.render('home')
});

router.get('/about-us', (req, res) => {
    res.render('about-us')

})

router.get('/services', (req, res) => {
    res.render('services')
})

router.get('/services/:id', (req, res) => {
    const { id } = req.params
    //const id = req.params.id
    //console.log(id);
    res.send(`Servicio de id = ${id}`)
})



router.get('/about-me', (req, res) => {
    res.render('about-me')
})

router.get('/projects', (req, res) => {
    res.render('projects')
})


router.get('/project_id/:id', (req, res) => {
    // const { id } = req.params
    const id = req.params.id
    res.send(`Este es el proyecto de id = ${id}`)
})





module.exports = router;
