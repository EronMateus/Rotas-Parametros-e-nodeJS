var express = require("express");
var app = express();
app.get("/", function(req, res)
 {
  res.send("seja bem vindo ao meu app, DEVS!")
});

app.get("/sobre", function(req, res){
    res.send("Aqui voce encontra informacoes sobre o app")
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog")
});
app.get("/News", function(req, res){
    res.send("Seja bem-vindo ao News onde você fala sobre o que quiser :)")
});
app.get("/Parceiros", function(req, res){
    res.send("Aqui onde vamos falar sobr Parcerias")
});
app.get("/projetos", function(req, res){
    res.send("E aqui vamos fazer projetos SUPER LEGAIS divirta-se")
});


app.listen(8090, function(){
    console.log("servido em andamento na url http:localhost:8090")
});