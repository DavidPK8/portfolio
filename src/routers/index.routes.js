// Importar routes de express
const {Router} = require('express')
const { renderIndex, renderLogin } = require('../controllers/index.controllers')

// Instanciar routes
const router = Router()

/*
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})
*/

router.get('/', renderIndex)

// Exportar la varaible router
module.exports = router