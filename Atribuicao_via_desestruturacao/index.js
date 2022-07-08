//... rest, ... spread, ...
//                 0       1       2 
//               0 1 2   0 1 2   0 1 2    
const numero = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    //console.log(numero[1][1])

//---------------------------------------------------------//

//Atribuição por desestruturação
const [lista1, lista2, lista3] = numero;
console.log(lista2[2]);