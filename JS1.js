let faturamentomes = parseInt (prompt("Quanto você quer faturar por mês com seus serviço de freelancer:"))
let horas = parseInt (prompt("Qual o número de horas por dia que você planeja trabalhar:"))
let dias = parseInt (prompt("Você pretende trabalhar em quantos dias da semana:"))
let ferias = parseInt (prompt("Quantas semanas de férias você planeja tirar no ano:"))

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

let horasproj = parseInt (prompt("O custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00. Pensando em um projeto a ser executado, quantas horas você vai trabalhar no projeto, por dia:"))
let diasproj = parseInt (prompt("Quantos dias você estima que o projeto vai durar:"))

let precoproj = parseInt (multiplicacao (faturamentodia , multiplicacao (horasproj , diasproj)))

alert ("O preço a ser cobrado pelo projeto é de R$" + precoproj + ",00.")
