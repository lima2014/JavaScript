//Tratando e lançando erros (try, catch, throw)

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number' ){
        throw('x ou y precisam ser numeros');

    }
    return x + y;
}
    
try{
console.log(soma(1,2));
//console.log(soma('1',2));
}catch(erros){
    console.log('Alguma coisa mais amigavel para o usuário')
}





