let valores = [8,1,7,4,2,9]
valores.sort()//Colocar ordem Crescente
/*console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for(let pos = 0;pos < valores.length; pos++){//Forma Composta
    console.log(`Aposicao ${pos}Tem Valor ${valores[pos]}`)
}

for(let pos in valores){//Forma mais Simples
    console.log(`Aposicao ${pos}Tem Valor ${valores[pos]}`)
}