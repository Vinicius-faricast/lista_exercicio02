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
// const maxSpeed = speed => {

//     const value = ((speed - 80) * 5).toFixed(2);
//     const response = speed > 80 
//         ? `Você ultrapassou o limite de velocidade, multa no valor de ${value}` 
//         : '';

//     return response;
// };

// const speedVeicle = parseInt(prompt("digite a velocidade do veículo: "));
// console.log(maxSpeed(speedVeicle));

/*Exercicio 03*/
// const priceDistanceBigger200 = distance => (distance*0.50).toFixed(2);
// const priceDistanceLower200 = distance => (distance*0.45).toFixed(2)

// const price = distance => {
//     const result = distance > 200 ? priceDistanceBigger200(distance) : priceDistanceLower200(distance);
//     return result;
// }

// const value = parseInt(prompt("digite o valor da distancia em km da viagem: "));
// console.log(`O valor da passagem é de ${price(value)}`)

/*Exercicio 04*/
// const inputValues = () =>{
//     const segments = [];

//     for (let index = 0; index < 3; index++) {
//         segments[index] = parseInt(prompt(`o tamanho do segmento ${index+1}: `));
//     };

//     return segments;
// }

// const valueCheck = ([a, b, c]) => {
//     const condition = (a+b) > c && (b+c > a) && (a+c > b);

//     return condition
//         ? "Esses segmentos podem formar um triangulo" 
//         : "Esses segmentos não podem formar um triangulo";
// };

// const values = inputValues();
// console.log(valueCheck(values));

/*Exercicio 05*/
// let condition = true;

// const machinePlay = () => {
//     const machineOptions = ['pedra', 'papel', 'tesoura'];
//     const machineChoice = machineOptions[Math.floor(Math.random() * 3)];

//     return machineChoice
// }

// const joKenPo = (machinevlue, playerValue) => {
//     const conditionVictoryOne = playerValue === 'pedra' && machinevlue === 'tesoura';
//     const conditionVictoryTwo = playerValue === 'papel' && machinevlue === 'pedra';
//     const conditionVictoryTree = playerValue === 'tesoura' && machinevlue === 'papel';

//     if (machinevlue === playerValue){
//         return "Empate!"
//     }

//     if(conditionVictoryOne || conditionVictoryTwo || conditionVictoryTree){
//         return "Você venceu!"
//     }

//     return "Você perdeu!"
// } 

// while (condition) {
//     const choicePlayer = prompt(`Escolha entre Pedra, Papel ou Tesoura: `).toLowerCase();
//     const machine = machinePlay();
//     const result = joKenPo(machine, choicePlayer);

//     console.log(`Você escolheu ${choicePlayer} e a máquina ${machine}. ${result}`)

//     const continuePlay = prompt(`Deseja continuar [S/N]: `).toUpperCase();

//     condition = continuePlay === "S";
// }

/*Exercicio 06*/
// const checkNumbers = (numberPlayer, numberMachine) => {
//     return numberMachine === numberPlayer 
//         ? `Você acertou o número sorteado foi ${numberMachine}` 
//         : `Você errou o número sorteado foi ${numberMachine}`
// }


// const numberValue = Math.floor(Math.random() * 5 + 1);
// const numberPlayer = parseInt(prompt(`Escolha um número de 1 a 5: `));


// console.log(checkNumbers(numberPlayer, numberValue));

/*Exercicio 07*/
// const Car = (rent, lowerDistance, aboveDistance) => {
//     return {
//         rent,
//         lowerDistance,
//         aboveDistance,

//         rentPerDay: (days) => {
//             return (days*rent);
//         },

//         valueDistance: (distance) => {
//             return distance <= 200 
//                 ? (aboveDistance*distance).toFixed(2) 
//                 : (lowerDistance*distance).toFixed(2) 
//         },

//         totalPrice(distance, days) {
//             const valueDistance = this.valueDistance(distance);
//             const valueRent = this.rentPerDay(days)
//             const price = Number(valueDistance) + Number(valueRent);
//             return price.toFixed(2);
//         }
//     }
// }

// const expensiveCar = Car(150, 0.30, 0.25);
// const popularCar = Car(90, 0.20, 0.10);

// const calculatorPrices = (carType, dayRent, travelledDistance) => {
//     let dados = {};
//     if (carType === "luxo") {
//         dados = expensiveCar;
//     } else {
//         dados = popularCar;
//     }

//     return (
//     `Valores: 
// Valor da diaria: ${dados.rentPerDay(dayRent)}
// Valor da quilometragem: ${dados.valueDistance(travelledDistance)}
// valor Total: ${dados.totalPrice(travelledDistance, dayRent)}`
//     );
// }

// const rentCar = () => {
//     const carType = prompt(`Qual tipo de carro alugado (luxo/popular): `).toLowerCase();
//     const dayRent = parseInt(prompt(`Quantos dias alugado: `));
//     const travelledDistance = parseInt(prompt(`Quantos Km percorrido: `));

//     console.log(calculatorPrices(carType, dayRent, travelledDistance));
// }

// rentCar();

/*Exercicio 08*/
// . Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

// const pointPerHours = hours => {
//     if(hours <= 10) {
//         return hours * 2;
//     };

//     if(hours > 10 && hours <= 20) {
//         return hours * 5;
//     };

//     return hours * 10;
// }

// const moneyPerPoints = points => {
//     return (points * 0.05).toFixed(2);
// };

// const healthyLife = () => {
//     const hoursMonth = parseInt(prompt(`Quantos horas nesse mês praticou atividade física: `));
//     const points = pointPerHours(hoursMonth);
//     const value = moneyPerPoints(points);

//     console.log(`Você teve ${points} nesse mês e ganhou R$${value}`)
// }

// healthyLife();

/*Exercicio 09*/
// let condition = "s";
// const salarys = {
//     male: 0,
//     female: 0
// };

// const calculateSalary = (gender, salary) => {
//     const genderInfo = gender === 'm' ? 'male' : 'female';

//     salarys[genderInfo] += salary;
//     return;
// }

// const templateInfos = () =>{
//     console.log(`
//     Total de salario pago aos homens: ${salarys.male}.
//     Total de salario pago as mulheres: ${salarys.female}.
//     `)
// }

// while (condition === "s") {
//     const salary = parseInt(prompt(`Qual o salario do Funcionario: `));
//     const gender = prompt(`Qual o sexo do funcionario [M/F]: `).toLowerCase();
    
//     calculateSalary(gender, salary);

//     condition = prompt(`Deseja continuar [S/N]: `).toLowerCase();
// }

// templateInfos();

/*Exercicio 10*/
/*Exercicio 11*/
/*Exercicio 12*/