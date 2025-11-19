let min= parseInt(prompt("Ingrese la cantidad de minutos:"));

let horas= min / 60;
let minutos= min % 60;

console.log(`${min} minutos son ${horas} horas y ${minutos} minutos.`);