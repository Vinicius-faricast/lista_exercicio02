const prompt = require('prompt-sync')();
/*Exercicio 01*/
// const dayPerCigarette = CigarretteNumber => {
//     const timeLostInMinutes = 10 * CigarretteNumber;
//     const timeLostInHours = Math.floor(timeLostInMinutes / 60);
//     const timeLostInDays = Math.floor(timeLostInMinutes/1440);
//     const restTimeLostInHours = Math.floor((timeLostInMinutes%1440) / 60);

//     const textComplement = restTimeLostInHours > 1 ? ` e ${restTimeLostInHours} horas` : '';

//     const result = timeLostInDays >= 1 
//     ? `Você perderá um total de ${timeLostInDays} ${timeLostInDays === 1 ? 'dia' : 'dias'}${textComplement}` 
//     : `Você perderá um total de ${timeLostInHours} ${timeLostInHours <= 1 ? 'hora' : 'horas'}`
    

//     return result;
// }

// const cigarretesNumbers = parseInt(prompt("A quantidade de cigarros: "));
// console.log(dayPerCigarette(cigarretesNumbers));

/*Exercicio 02*/
// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
// , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

// const maxSpeed = speed => {

//     const value = ((speed - 80) * 5).toFixed(2);
//     const response = speed > 80 
//         ? `Você ultrapassou o limite de velocidade, multa no valor de ${value}` 
//         : '';

//     return response;
// };

// const speedVeicle = parseInt(prompt("digite a velocidade do veículo: "));
// console.log(maxSpeed(speedVeicle));