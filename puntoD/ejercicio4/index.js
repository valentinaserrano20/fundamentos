let kmrec = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos por el vehículo:"));

let consumoxkm = parseFloat(prompt("Ingrese el consumo de combustible por kilómetro (litros/km):"));

let totalcombustible = kmrec * consumoxkm;

console.log(`El total de combustible consumido es: ${totalcombustible} litros.`);