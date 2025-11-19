let precio= parseInt(prompt("ingrese el precio del producto: "));

const desc= 0.10;

descApl= precio * desc;

precioFinal = precio - descApl;

console.log(`el precio inicial del producto era: ${precio}, su descuento es de ${descApl} y el precio final es: ${precioFinal} `);
