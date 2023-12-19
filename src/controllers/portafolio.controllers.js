const Portfolio = require('../models/Portfolio')
const { uploadImage } = require('../config/cloudinary')

// METODO PARA LISTAR LOS PORTAFOLIOS
const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find({user:req.user._id}).lean()
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
    newPortfolio.user = req.user._id
    if(!(req.files?.image)) return res.send("Se requiere una imagen")
    const imageUpload = await uploadImage(req.files.image.tempFilePath)
    newPortfolio.image = {
        public_id:imageUpload.public_id,
        secure_url:imageUpload.secure_url
    }
    await newPortfolio.save()
    res.redirect('/portafolios')
}

// METODO PARA ACTUALIZAR EL FORMULARIO
const renderEditPortafolioForm =async(req,res)=>{
    // Consulta del portafolio en BDD con el ID
    const portfolio = await Portfolio.findById(req.params.id).lean()
    // Mandar a la vista
    res.render('portafolio/editPortfolio',{portfolio})
}
// METODO PARA ACTUALIZAR EN LA BDD LO CAPTURADO EN EL FORM
const updatePortafolio = async(req,res)=>{
    const portfolio = await Portfolio.findById(req.params.id).lean()
    if(!(portfolio.user.toString() !== req.user._id.toString())) return res.redirect('/portafolios')
    const {title,category,description}= req.body
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    res.redirect('/portafolios')
}
// METODO PARA ELIMINAR EN LA BDD
const deletePortafolio = async(req,res)=>{
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
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