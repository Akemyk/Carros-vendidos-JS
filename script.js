var salarioFixo = parseFloat(prompt("Qual é o valor do seu salário fixo?"))
var carrosVendidos = parseInt(prompt("Quantos carros você vendeu?"))
var totalVendas = parseFloat(prompt("Qual o valor total das vendas?"))
var comissaoFixa = parseFloat(prompt("Qual o valor da sua comissão fixa"))
var valorComissao = comissaoFixa * carrosVendidos
var salarioFinal = salarioFixo + valorComissao + (totalVendas* 0.05)
salarioFinalf = salarioFinal.toFixed(2)
alert("O salário final é "+salarioFinalf)