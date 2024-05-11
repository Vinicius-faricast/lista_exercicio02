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
// const listNumberRandon = [];

// for (let index = 0; index < 20; index++) {
//     listNumberRandon.push(Math.floor(Math.random()*100));
// }

// console.log(listNumberRandon.sort());

/*Exercicio 17*/
// const peopleName = [];
// const peopleAge = [];

// const peopleUnderEigthteen = (listName, listAge) => {
    
//     listAge.forEach((age, index) => {
//        if (age < 18) {
//             console.log(`${listName[index]} tem ${age} anos`)
//        } 
//     });
// } 

// for (let index = 0; index < 9; index++) {
//     const name = prompt(`Digite um nome: `);
//     const age = parseInt(prompt(`Digite a idade: `));
    
//     peopleName.push(name);
//     peopleAge.push(age);

// }

// peopleUnderEigthteen(peopleName, peopleAge);

/*Exercicio 18*/
// const worker = (name, role, salary) => {
//     return {name, role, salary}
// }

// const nameWorker = prompt(`Digite um nome: `);
// const roleWorker = prompt(`Digite o cargo: `);
// const salaryWorker = parseInt(prompt(`Digite o salario: `));

// const devWorker = worker(nameWorker, roleWorker, salaryWorker);
// console.log(`
// Funcionário
// Nome: ${devWorker.name};
// cargo: ${devWorker.role};
// salário: ${devWorker.salary}.
// `);

/*Exercicio 19*/
// Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

// const validateTime = (time) => {
//     const parts = time.split('.');
//     const errorMenssage = "Insira um horário valido";

//     if(parts.length !== 3) {
//         return false
//     };

//     const conditionNumberInParts = !(parts[0].length !== 2 || parts[1].length !== 2 || parts[2].length !== 2);
//     const conditionIsNumberInParts = (parseInt(parts[0])) || parseInt((parts[1])) || parseInt((parts[2]));
    
//     if(conditionNumberInParts && conditionIsNumberInParts) {
//         return true;
//     }

//     return false;
// }

// const times = [];
// let condition = 0;

// while (condition < 3) {
//     const time = prompt("Insira um horário no formato HH.MM.SS:");

//     if(validateTime(time)){
//         times.push(time);
//         condition++;
//     }else{
//         console.log("Insira um horário valido");
//     };
// }

// times.forEach(element => {
//     console.log(element)
// })

/*Exercicio 20*/
// const workers = [
//     {
//         registration: 1,
//         Name: 'José',
//         grossSalary: 2000,
//         INSS: 0.12,
//         netSalary: 1.760, 
//     },
//     {
//         registration: 2,
//         Name: 'Maria',
//         grossSalary: 3000,
//         INSS: 0.12,
//         netSalary: 2.640, 
//     },
//     {
//         registration: 3,
//         Name: 'Pedro',
//         grossSalary: 1550,
//         INSS: 0.12,
//         netSalary: 1.364, 
//     }
// ];

// const readerTableWorkers = table => {
//     table.forEach(({registration, Name, grossSalary, INSS, netSalary}) => {
//         console.log(`
// Matrícula: ${registration}
// Nome: ${Name}
// Salário bruto: ${grossSalary}
// Dedução INSS: ${INSS}
// Salário líquido: ${netSalary}
// -----------------------`)
//     });
// }
// readerTableWorkers(workers)

/*Exercicio 21*/
// Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

// const idealWeight = (heigth, gender) => {
//     const result = gender === 'm' ? (72.7 * heigth) - 58 : (62.1 * heigth) - 44.7;
//     return `Seu peso ideal é ${result.toFixed(2)} kg`
// }

// const heigth = Number(prompt("Insira sua altura: "));
// const gender = prompt("Insira seu sexo[m/f]: ").toLowerCase();

// console.log(idealWeight(heigth, gender));

/*Exercicio 22*/
// const listpeoples = [];

// const peoplesInfos = (salary, childrens) => {
//     return {
//         salary,
//         childrens
//     };
// };

// const mediaSalary = peoples => {
//     let numberPeoples = 0;
//     let salaryTotal = 0;

//     peoples.forEach(({salary, childrens}) => {
//         numberPeoples += 1 + childrens;
//         salaryTotal += salary;
//     });

//     const averageWage = salaryTotal / numberPeoples;
//     return averageWage
// }

// const mediaChildrens = peoples => {
//     let numberChildrens = 0;
//     peoples.forEach(({childrens}) => {
//         numberChildrens += childrens;
//     });

//     const media = numberChildrens !== 0 ? numberChildrens / peoples.length : 0;
//     return media;
// }

// const highestSalary = peoples => {
//     let hightSal = 0;

//     peoples.forEach(({salary}) => {
//         if(salary > hightSal){
//             hightSal = salary
//         }
//     })

//     return hightSal;
// }

// const salaryUpTo350 = people => {
//     let sal350 = 0;

//     people.forEach(({salary}) => {
//         if(salary <= 350){
//             sal350++
//         }
//     })

//     const result = sal350 !== 0 ? (sal350*100) / people.length : 0;
//     return result;
// }

// const readerInfos = () => {
//     let condition = 's'
//     while(condition === 's') {
//         const salary = Number(prompt("Qual o valor do salário: "));
//         const children = Number(prompt('Qual o número de filhos: '));

//         listpeoples.push(peoplesInfos(salary, children));
//         condition = prompt("Deseja continuar[s/n]: ").toLowerCase();
//     }
// }

// readerInfos();

// console.log(`Media salarial: ${mediaSalary(listpeoples)}`)
// console.log(`Media de filhos: ${mediaChildrens(listpeoples)}`)
// console.log(`Maior salário: ${highestSalary(listpeoples)}`)
// console.log(`Porcentagem de pessoas que recebem até 350,00: ${salaryUpTo350(listpeoples).toFixed(2)}%`);

/*Exercicio 23*/
// const mi = [];

// for (let i = 0; i < 7; i++) {
//     const row = [];
//     for (let j = 0; j < 7; j++) {
//         if (i === j) { 
//             row.push(1);
//         } else {
//             row.push(null);
//         }
//     }
//     mi.push(row);
// }

// console.log(mi);

/*Exercicio 24*/
// const createMi = () => {
//     const mi = [];
//     for (let i = 0 ; i < 6 ; i++) {
//         const row = [];
//         for(let j = 0; j < 8; j++) {
//             const numberGenerator = Math.floor(Math.random() * (10 - (-10 + 1)) + (-10));
//             row.push(numberGenerator)
//         }
//         mi.push(row); 
//     }
//     return mi;
// }

// const createVectoNegativeNumber = () => {
//     const c = [];

//     mi.forEach(element => {
//         element.forEach( number => {
//             if(number < 0) c.push(number) 
//         })
//     })

//     return c;
// }

// const mi = createMi()
// const c = createVectoNegativeNumber();


// console.log(c);

/*Exercicio 25*/
// const createMi = () => {
//     const mi = [];
//     for(let i = 0; i < 15; i++){
    
//         const row = [];
//         for (let j = 0; j < 20; j++) {
//             const randomNumber = Number((Math.random()*10).toFixed(2));
//             row.push(randomNumber);
//         }
//         mi.push(row);
//     }
//     return mi;
// }


// const sumColuns = matriz => {
//     let currentValue = [];

//     matriz.forEach((element) => {
//         for (let index = 0; index < element.length; index++) {
//             currentValue[index] = currentValue[index] 
//             ? (currentValue[index] + element[index]) 
//             : (element[index]);
//         };
//     });

//     return currentValue;
// }

// const formatTemplate = list => {
//     list.forEach((value, index) => {
//         console.log(`O valor da soma da coluna ${index + 1} é ${value.toFixed(2)}`);
//     })
// }

// const mi = createMi();
// const currentValue = sumColuns(mi);
// console.log(formatTemplate(currentValue));

/*Exercicio 26*/
/*Exercicio 27*/
/*Exercicio 28*/