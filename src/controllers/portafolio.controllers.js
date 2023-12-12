const Portfolio = require('../models/Portfolio')

// METODO PARA LISTAR LOS PORTAFOLIOS
const renderAllPortafolios = async(req,res)=>{
    // Listar todos los portafolios y transformar en Objetos lean
    const portfolios = await Portfolio.find().lean()
    // Mandar a la vista los portafolios
    res.render("portafolio/allPortfolios",{portfolios})
}
// METODO PARA LISTAR EL DETALLE DE UN PORTAFOLIO
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
// METODO PARA MOSTRAR EL FORMULARIO 
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}
// METODO PARA GUARDAR EN LA BDD EN EL FORM
const createNewPortafolio =async (req,res)=>{
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    res.json({newPortfolio})
}

// METODO PARA ACTUALIZAR EL FORMULARIO
const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}
// METODO PARA ACTUALIZAR EN LA BDD LO CAPTURADO EN EL FORM
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}
// METODO PARA ELIMINAR EN LA BDD
const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}

// EXPORTACION COMMONJS NOMBRADA
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}