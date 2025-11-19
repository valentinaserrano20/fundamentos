let nombre = prompt("Ingrese el nombre del producto");
let precio = parseInt(prompt("Ingrese el precio del producto"));
let cantidad = parseInt(prompt("Ingrese la cantidad del producto"));


let total = precio * cantidad;

console.log(`el valor total a pagar por ${cantidad} ${nombre} es: ${total}`);
