const express = require("express");
const app = express();
const dir = __dirname;

app.use(express.static('public'));
app.use('/css', express.static(dir + 'public/css'));
//app.use('/img', express.static(dir + 'public/img'));


app.get("/",function(req,res){  // vc requisita algo para o servidor
    res.sendFile(dir + "/index.html");
});
/*
app.get("/contato",function(req,res){  // vc requisita algo para o servidor
    res.send("<h1>Tá querendo me ligar pra que? corno</h1>")      // o servidor te responde
});
*/
app.get("/post/:titulo",function(req,res){  // vc requisita algo para o servidor
    console.log(req.params.titulo); // o usuario vai enviar para o servidor a informação
    if(req.params.titulo == "contato"){
        res.send("<h1>Tá querendo me ligar pra que? corno</h1>");      // o servidor te responde
    }else{
        res.send("<h1>Fala ai oque tu quer</h1>");
    }
});




app.listen(9999, function(){
    console.log("to rodando carai, vai nesse site corno http://localhost:9999")
});