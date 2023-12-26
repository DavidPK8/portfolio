// Importar ruta de express
const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser,confirmEmail} = require('../controllers/user.controllers')
const router = Router()
const { redirectIfAuthenticated } = require('../helpers/validate-auth')

// Ruta para mostrar el formulario de registro
router.get('/user/register',renderRegisterForm)
// Ruta para capturar los datos del formulario y almacenar en el BDD
router.post('/user/register',registerNewUser)

// Ruta para mostrar el formulario de login
router.get('/user/login', redirectIfAuthenticated, renderLoginForm)
// Ruta para capturar los datos del formulario y realizar el proceso de login en conjunto con BDD
router.post('/user/login',loginUser)

// Ruta para cerrar Sesion del usuario
router.post('/user/logout',logoutUser)

router.get('/user/confirmar/:token',confirmEmail)

// Exportar la variable router
module.exports =router