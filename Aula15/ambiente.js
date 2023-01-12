let num = [5,8,2,9,3]//vetores
num.sort()//Ordem crescente
num.push(1)//Acrescentar um Item
console.log(num)
console.log(`O vetor tem ${num.length} Posiçoes`)//Posicao do Vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)//Retorna Valores
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(`O valor 4 está na posiçao ${pos}`)
}