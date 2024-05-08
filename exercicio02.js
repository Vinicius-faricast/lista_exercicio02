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
// let condition = true;
// let Numbers = {
//     lowerNumber: 0,
//     sumNumber: 0,
//     mediaValues: 0,
//     par: 0,
//     listNumber: [],
// };

// const parValue = () => {
//     Numbers.listNumber.forEach(element => {
//         if(element%2 === 0){
//             Numbers.par ++;
//         };
//     });
// }

// const lowerNumbers = value => {
//     if((Numbers.lowerNumber >= value) || Numbers.listNumber.length === 1){
//         Numbers.lowerNumber = value;
//     };
// };

// const media = () => {
//     const total = Numbers.sumNumber;
//     const dividend = Numbers.listNumber.length;
//     Numbers.mediaValues = total / dividend;
// };

// const totalAdded = () => {
//     Numbers.sumNumber = Numbers.listNumber.reduce((acc, value) => acc + value, 0);
// };

// const addNumber = value => {
//     Numbers.listNumber.push(value);
//     lowerNumbers(value);

// };

// const textFormat = () => {
//     console.log(`
//     Somatório entre todos os valores: ${Numbers.sumNumber}.
//     Menor valor digitado: ${Numbers.lowerNumber}.
//     Média entre todos os valores: ${Numbers.mediaValues}.
//     Quantos valores são pares: ${Numbers.par}.`)
// }

// while (condition) {
//     const number = parseInt(prompt(`Digite um número: `));
//     const nextNumber = prompt(`Deseja continuar [S/N]: `).toLowerCase();

//     addNumber(number);
   
//     condition = nextNumber === 's' ? true : false;
// }

// parValue();
// totalAdded();
// media()
// textFormat();

/*Exercicio 11*/
// let firstValue = parseInt(prompt(`Insira o primeiro termo: `));
// let r = parseInt(prompt(`Insira a razão: `));
// let PA = []

// for (let index = 0; index <= 10; index++) {
//     if(index === 0){
//         PA.push(firstValue);
//     }

//     PA.push(PA[PA.length-1] + r);
// }

// console.log(PA.toString())

/*Exercicio 12*/
// let firstNumber = 0;
// let secondNumber = 0;
// let result = 0

// for (let index = 0; index < 10; index++) {
//     if(index === 0 || index === 1){
//         firstNumber = 1;
//         secondNumber = 1;

//         console.log(firstNumber)

//     }else{
//         result = firstNumber + secondNumber;
//         firstNumber = secondNumber;
//         secondNumber = result;
        
//         console.log(result);

//     };
// };

/*Exercicio 13*/
// let listNumber = []
// for (let index = 0; index < 15; index++) {
//     if(listNumber.length === 0 || listNumber.length === 1){
//         listNumber.push(1);
//     }else{
//         listNumber.push(listNumber[listNumber.length -1] + listNumber[listNumber.length-2]);
//     };
    
// };

// console.log(listNumber);

/*Exercicio 14*/
// const listName = [];

// for (let index = 0; index < 7; index++) {
//     listName[index] = prompt(`Digite um número: `);
// }

// console.log(listName.reverse());

/*Exercicio 15*/
// const listNumbers = [];
// const listParValues = [];
// const listIndexValue = [];

// const listTemplate = (listPar, listIndex) => {
//     listPar.forEach((element, index) => {
//         console.log(`Elemento ${element} está no index ${listIndex[index]}`)
//     })
// }

// const valuePar = list => {
//     list.forEach((element, index) => {
//         if(element%2 === 0){
//             listParValues.push(element);
//             listIndexValue.push(index);
//         }
//     })
// }

// for (let index = 0; index < 10; index++) {
//     listNumbers[index] = parseInt(prompt(`Insira o primeiro termo: `));

// }

// valuePar(listNumbers);
// listTemplate(listParValues, listIndexValue);

/*Exercicio 16*/
// Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

// const listNumberRandon = [];

// for (let index = 0; index < 20; index++) {
//     listNumberRandon.push(Math.floor(Math.random()*100));
// }

// console.log(listNumberRandon.sort());

/*Exercicio 17*/
/*Exercicio 18*/
/*Exercicio 19*/
