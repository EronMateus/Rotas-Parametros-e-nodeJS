var express = require("express");
var app = express();
app.get("/", function(req, res)
 {
  res.send("seja bem vindo ao meu app, DEVS!")
});
app.get("/Ola/:Estudante/:Estudar/:laranja", function(req, res){
    res.send("<h1>Olá " + req.params.Estudante + "</h1>"+"<h2>Sua função é "
    + req.params.Estudar + "</h2>"+"<h3>Sua cor favorita é "+ req.params.laranja + "</h3>");
   
});
app.get("/Sobre/:Mateus/:Preto/:Manga", function(req, res){
    res.send("<h1>Sobre " + req.params.Mateus + "</h1>"+"<h2>Sua cor favorita "
    + req.params.Preto + "</h2>"+"<h3>Sua Fruta favorita "+ req.params.Manga + "</h3>");
   
});
app.get("/locutor/:banda/:lucas/:Pao", function(req, res){
    res.send("<h1>Boas-vindas a " + req.params.banda + "</h1>"+"<h2>Primeiro Nome  "
    + req.params.lucas + "</h2>"+"<h3>Sobrenome "+ req.params.Pao + "</h3>");
   
});
app.get("/Noticia/:NewsTV/:Itapetinga/:Pao", function(req, res){
    res.send("<h1>Noticia " + req.params.NewsTV + "</h1>"+"<h2>Noticia vinda de  "
    + req.params.Itapetinga + "</h2>"+"<h3>Caso do "+ req.params.Pao + "</h3>");
   
});
app.get("/prova/:voce/:viajar/:praia", function(req, res){
    res.send("<h1>Olá " + req.params.voce + "</h1>"+"<h2>Que tal irmos "
    + req.params.viajar + "</h2>"+"<h3>Para onde vamos? "+ req.params.praia + "</h3>");
   
});



app.listen(8090, function(){
    console.log("servido andamento http:localhost:8090")
});