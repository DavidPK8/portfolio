// PRIMERA FUNCION PARA RENDERIZAR EL INDEX
const renderIndex = (req,res)=>{
    res.render('index')
}

// PRIMERA FUNCION PARA RENDERIZAR EL LOGIN
const renderLogin = (req,res)=>{
    res.render('login')
}

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
    renderIndex, 
    renderLogin
}