const express = require("express")
const app = express()
const Noticias = require("./models/Noticias")
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')


//config
    //tamplate engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

// ROTAS
    app.get('/noticias', function(req, res){
        
        res.render('formulario')
    })
    app.post('/add', function(req, res){
        Noticias.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Falha na criação: " + erro)
        })
        //res.send('Texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo)
    })

    app.get('/', function(req, res) {
        Noticias.findAll({order:[['id', 'DESC']]}).then(function(noticias){
            res.render('home',{noticias: noticias})
        })
    })

    app.get('/deletar/:id', function(req, res){
        Noticias.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem foi deletada com sucesso!")
        }).catch(function(erro){
            res.send("Erro " + erro + " ao tentar deletar!")
        })
    })


app.listen(9999, function(){
    console.log("Clica  ai  http://localhost:9999")
});