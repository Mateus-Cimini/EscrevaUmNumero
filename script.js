let numero = document.getElementById("inputNumero")
let areares = document.getElementById("areaLista")
let res = document.getElementById("res")

let lista = []

function num(n) {
    if(Number(n) >= 1 && Number(n) <= 100 ) {
         return true
    } else {
        return false
    }
}

function inareares(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (num(numero.value) && !inareares(numero.value , lista)) {
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Numero ${numero.value} adicionado`
        areares.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor invalido ou ja encluso na lista")
    }

    numero.value = ''
    numero.focus()
}

function verificar(){
    if (lista.length == 0) {
        window.alert("Insira pelo menos 1 numero")
    } else {
        let tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for(let pos in lista) {
            soma += lista[pos]
            if (lista[pos] > maior)
                maior = lista[pos]
            if (lista[pos] < menor)
                menor = lista[pos]
           
          media = (soma / tot)
        }
         res.innerHTML = ''
            res.innerHTML += `foram adicionados o total de ${tot}  numeros <br>`
            res.innerHTML += `O menor numero e ${menor} <br>`
            res.innerHTML += `O maior numero e ${maior}<br>`
            res.innerHTML += `A soma de todos os numeros sao ${soma}<br>`
            res.innerHTML += `A media e ${media}`
            }

   
}
 


   





   




