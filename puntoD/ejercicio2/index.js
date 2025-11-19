let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));

let valorHora = parseFloat(prompt("Ingrese el valor por hora trabajada:"));

let salarioS = horas * valorHora;

console.log(`El salario semanal por ${horas} horas es: ${salarioS} `);