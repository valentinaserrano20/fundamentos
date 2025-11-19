let distancia = parseFloat(prompt("Ingrese la distancia del viaje en kilómetros:"));

let velocidad = parseFloat(prompt("Ingrese la velocidad promedio en km/h:"));

let tiempo = distancia / velocidad;

console.log(`El tiempo estimado del viaje es: ${tiempo} horas.`);