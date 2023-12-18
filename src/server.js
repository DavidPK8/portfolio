const exp = require('constants')
const express = require('express')
const app = express()
// Importacion de path
const path = require("path")

// Importar HANDLEBARS
const { engine }  = require('express-handlebars')

// Importar el methodOveerride
const methodOverride = require('method-override');

// Configuraciones 
// Establecer el path de la carpeta views
app.set('views',path.join(__dirname, 'views'))
// Establecer las configuraciones extras
app.engine('.hbs',engine({
    // Establecer el master page
    defaultLayout:'main',
    // Establecer el path de la carpeta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    // Establecer el path de la carpeta partials
    partialsDir: path.join(app.get('views'),'partials'),
    // Establecer la extension de las paginas
    extname:'.hbs'
}))
// Establecer el motor de las plantillas
app.set('view engine','.hbs')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inicializaciones
// Instanciar Express
// const app = express()

// Configuraciones 
// Variables de configuracion
app.set('port',process.env.port || 3000)

// let views = "C:\Users\APLICACIONES WEB\Desktop\Desarrollo de Aplicaciones Web\portfolio"

app.set('views',path.join(__dirname, 'views'))

// Middlewares 
// Sabemos que usamos un Middlewares cuando usamos use
// SERVIDOR VA A TRABAJAR CON INFORMACION EN BASE A FORMULARIOS
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

// Variables globales

// Rutas
// PRIMERA RUTA
// RUTA PARA CONEXION CON BASE DE DATOS  
/*app.get('/',(req,res)=>{
    res.send("Server on")
})*/
/*
app.get('/',(req,res)=>{
    res.render('index')
})
*/
app.use(require('./routers/index.routers.js'))

app.use(require('./routers/portafolio.routes'))

app.use(require('./routers/user.routes'))

// Archivos estáticos
// Definir archivos estáticos y públicos
app.use(express.static(path.join(__dirname,'public')))




// Exportar la variable app
module.exports = app
