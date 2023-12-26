const Portfolio = require('../models/Portfolio')

// PRIMERA FUNCION PARA RENDERIZAR EL INDEX
const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}

// PRIMERA FUNCION PARA RENDERIZAR EL LOGIN
/*const renderLogin = (req,res)=>{
    res.render('login')
}*/

/*
FORMATO JSON 
const renderLogin = (req,res)=>{
    res.json({
        "nombre": "David",
        "apellido": "Vallejo"
    })
}
*/


// EXPORTAR LAS DOS FUNCIONES
module.exports ={
    renderIndex
}