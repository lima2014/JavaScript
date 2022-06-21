//Objeto Date
// const tresHoras = 60 * 60 * 3 * 1000; 
// const umDia = 60 * 60 * 24 * 1000;  //
// const data = new Date(0 + tresHoras - umDia);//Marco zero


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth()+1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data  = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


// const data  = new Date('2022-06-20 02:56:59');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()+1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getMilliseconds());
// console.log('ms', data.getDay());
// console.log('Dia semana', data.getDate());
// console.log(data.toString());