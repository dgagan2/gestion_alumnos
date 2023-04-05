const mostarPrincipal = (req, res) => {
    res.render("index");
}
const callback=(req, res)=>{
    res.status(404);
    res.send("ruta no encontrada");
}

export{mostarPrincipal, callback}