const express = require("express");

const tarotThoth = require("./resumo-tarot-thoth");
const naipes = require("./naipes");
const arcanosMaiores = require("./arcanos");
const copas = require("./copas");
const bastoes = require("./bastoes");
const espadas = require("./espadas");
const pentaculos = require("./pentaculos");

const app = express();

app.get("/", function (requisicao, resposta) {
  resposta.send("Essa é a rota principal!");
});

app.get("/home", function (requisicao, resposta) {
  resposta.send("Olá Mundo! Esse é meu Segundo Servidor!");
});

app.get("/resumo-tarot", function (requisicao, resposta) {
  resposta.send(tarotThoth);
});

app.get("/naipes", function (requisicao, resposta) {
  resposta.send(naipes);
});

app.get("/arcanos", function (requisicao, resposta) {
  resposta.send(arcanosMaiores);
});

app.get("/copas", function (requisicao, resposta) {
  resposta.send(copas);
});

app.get("/bastoes", function (requisicao, resposta) {
  resposta.send(bastoes);
});

app.get("/espadas", function (requisicao, resposta) {
  resposta.send(espadas);
});

app.get("/pentaculos", function (requisicao, resposta) {
  resposta.send(pentaculos);
});

app.listen(3000);
