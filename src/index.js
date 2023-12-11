// Cargar todas las variables de entorno
require('dotenv').config()

const app = require('./server.js')


// Importar el metodo connection
const connection = require('./database.js')

// Ejecutar el metodo connection
connection()

// EJECUTAR EN SERVIDOR EN EL PUERTO 3000
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})