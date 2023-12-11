// Importar moongose
const mongoose = require('mongoose')

//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'

// Crear un metodo para hacer la cadena de conexion
connection = async () => {
    try {
        // Invocar al metodo connect
        await mongoose.connect(process.env.MONGODB_URI)
        // Respuesta de la promesa == "OK"
        console.log("Database is connected")
    } catch (error) {
        // Respuesta de la promesa == "Error"
        console.log(error);
    }
}

// Exportar el metodo connect
module.exports = connection