const express = require("express");
const app = express();
const dir = __dirname;
const Noticias = require("./public/models/Noticias");


//Rotas
app.get("/noticias",function(req, res){
    Noticias.findAll().them(function(noticias){
        res.send(noticias)
    });
});


app.get("/noticia/:id", function(req, res){
    Noticias.findAll({
        where:{
            id: req.params.id
        }
    }).them(function(noticia){
        res.send(noticia);
    });
});


app.post("/noticia/add", function(req, res){
    Noticias.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).them(function(){
        res.send("Cadastrado com Sucesso");
    }).catch(function(erro){
        res.send("Erro: " + erro);
    });
});


app.get("/noticia/delete/:id", function(req, res){
    Noticias.destroy({where:{ìd: req.params.id}}).them(function(){
        res.send("Removido com sucesso");
    }).catch(function(erro){
        res.send("Erro: " + erro);
    });
});


app.listen(9999, function(){
    console.log("to rodando carai, vai nesse site link http://localhost:9999")
});