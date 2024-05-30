// const prompt = require('prompt-sync')();
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
// const createMi = () => {
//     const mi = [];
//     for(let i = 0; i < 3; i++){

//         const row = [];
//         for (let j = 0; j < 15; j++) {
//             const randomNumber = Math.floor(Math.random()*10);
//             row.push(randomNumber);
//         }
//         mi.push(row);
//     }
//     return mi;
// }

// const multipleMatriz = (mA, mB) => {
//     const mP = [];
//     if ((mA.length === matrizB.length) && (mA[0].length === mB[0].length) ) {

//         mA.forEach((list, indexRow) => {
//             const row = [];
//             list.forEach((element, indexColunm) => {
//                 row.push(element*mB[indexRow][indexColunm])
//             })
//             mP.push(row);
//         })
//     }

//     return mP;
// }

// const matrizA = createMi();

// const matrizB = createMi();

// const matrizP = multipleMatriz(matrizA, matrizB);

// console.log(matrizP);

/*Exercicio 27*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 6; index++) {
//         const row = []
//         for (let j = 0; j < 6; j++) {
//             const value = Number(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const multiplaM = (matriz, value ) => {
//     const matrizV = []
//     matriz.forEach(row => {
//         row.forEach(element => {
//             matrizV.push(element*value);
//         });
//     });

//     return matrizV;
// }

// const matrizM = createMatriz();
// const value = Number(prompt("Digite um valor para multiplicar a matriz: "));
// const matrizV = multiplaM(matrizM, value);

// console.log(matrizM);
// console.log(matrizV);


/*Exercicio 28*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 10; index++) {
//         const row = []
//         for (let j = 0; j < 10; j++) {
//             const value = Number(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const upperDiagonalSum = (matriz) => {
//     let valueSum = 0;
//     matriz.forEach((row, indexRow) => {
//         row.forEach((colunm , indexColumn) => {
//             if(indexColumn > indexRow){
//                 console.log(colunm)
//                 valueSum += colunm;
//             };
//         });
//     });
//     return valueSum;
// }

// const downDiagonalSum = (matriz) => {
//     let valueSum = 0;
//     matriz.forEach((row, indexRow) => {
//         row.forEach((colunm , indexColumn) => {
//             if(indexColumn < indexRow){
//                 valueSum += colunm;
//             };
//         });
//     });
//     return valueSum;
// }

// const matrizM = createMatriz();

// const upperValueSum = upperDiagonalSum(matrizM);
// const downValueSum = downDiagonalSum(matrizM);

// console.log(`Soma diagonal superior ${upperValueSum}`);
// console.log(`Soma diagonal inferior ${downValueSum}`);

/*Exercicio 29*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 5; index++) {
//         const row = []
//         for (let j = 0; j < 5; j++) {
//             const value = Number(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const sumFourLine = matriz => {
//     let sum = 0;
//     matriz[3].forEach(item => {
//         sum += item;
//     })
//     return sum;
// }

// const sumColunmTwo = matriz => {
//     let sum = 0;
//     matriz.forEach(row => {
//         sum += row[1];
//     });
//     return sum;
// }

// const mainDiagonalSum = (matriz) => {
//     let sum = 0;
//     matriz.forEach((row, indexRow) => {
//         row.forEach((colunm, indexColunm) =>{
//             sum += indexColunm === indexRow && colunm;
//         });
//     });
//     return sum;
// };

// const sumTotal = matriz => {
//     let sum = 0;
//     matriz.forEach(row => {
//         row.forEach(item => {
//             sum += item;
//         });
//     });
//     return sum;
// };

// const matrizM = createMatriz();

// const valueSumDiagonal = mainDiagonalSum(matrizM);
// const valueSumFourLine = sumFourLine(matrizM);
// const valueSumColunmTwo = sumColunmTwo(matrizM);
// const valueSumTotal = sumTotal(matrizM);

// console.log(`Soma da linha 4: ${valueSumFourLine}`);
// console.log(`Soma da coluna 2: ${valueSumColunmTwo}`);
// console.log(`Soma da diagonal principal: ${valueSumDiagonal}`);
// console.log(`Soma total: ${valueSumTotal}`);
// console.log(matrizM);

/*Exercicio 30*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 5; index++) {
//         const row = []
//         for (let j = 0; j < 5; j++) {
//             const value = Number(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const sumFifthLine = matriz => {
//     let sum = 0
//     matriz[4].forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// const sumFifthColunm = matriz => {
//     let sum = 0;
//     matriz.forEach((row) => {
//         row.forEach((element, index) => {
//             sum += index === (row.length-1) ? element : 0;
//         });
//     });
//     return sum;
// }

// const matrizM = createMatriz();
// console.log(sumFifthLine(matrizM));
// console.log(sumFifthColunm(matrizM));

/*Exercicio 31*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 30; index++) {
//         const row = []
//         for (let j = 0; j < 30; j++) {
//             const value = parseInt(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const countValue = (value, matriz) => {
//     let count = 0;
//     matriz.forEach(row => {
//         row.forEach(element => {
//             count += element === value && 1;
//         });
//     });
//     return count;
// };

// const newMatriz = (value, matriz) => {
//     const matrizV = [];
//     matriz.forEach(row => {
//         const line = []
//         row.forEach(element => {
//             if (element !== value) {
//                 line.push(element)
//             };
//         });
//         matrizV.push(line)
//     })
//     return matrizV;
// }

// const number = parseInt(prompt('Digite um numero: '))
// const matrizM = createMatriz()
// const count = countValue(number, matrizM);
// const matrizV = newMatriz(number, matrizM);

// console.log(count);
// console.log(matrizV);
// console.log(matrizM)

/*Exercicio 32*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 12; index++) {
//         const row = []
//         for (let j = 0; j < 13; j++) {
//             const value = parseInt(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const newMatriz = (matriz) => {
//     const matrizV = [];
//     matriz.forEach(row => {
//         const maxNumber = Math.abs(Math.max(...row));
//         const line = []
//         row.forEach(element => {
//             line.push(element/maxNumber);
//         });
//         matrizV.push(line);
//     });
//     return matrizV
// }

// const matrizM = createMatriz();

// console.log(newMatriz(matrizM));
// console.log(matrizM);

/*Exercicio 33*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 3; index++) {
//         const row = []
//         for (let j = 0; j < 3; j++) {
//             const value = parseInt(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const multipleMainDiagonal = matriz => {
//     const multiplier = secundaryDiagonal(matriz)
//     matriz.forEach((row, index) => {
//         row.forEach((element, indexColumn) => {
//             if(index === indexColumn){
//                 console.log(multiplier * element);
//             };
//         });
//     });
// };

// const secundaryDiagonal = matriz => {
//     let media = 0
//     matriz.forEach((row, index) => {
//         row.forEach((element, indexColumn) => {
//             if((index + indexColumn) === (row.length - 1)){
//                 media += element;
//             };
//         });
//     });
//     return media/matriz.length;
// };

// const matrizM = createMatriz();
// console.log(multipleMainDiagonal(matrizM));

/*Exercicio 34*/
// const createMatriz = () => {
//     const matrizM = [];
//     for (let index = 0; index < 50; index++) {
//         const row = []
//         for (let j = 0; j < 50; j++) {
//             const value = parseInt(prompt("Digite um valor: "));
//             row.push(value)
//         }
//         matrizM.push(row) 
//     }
//     return matrizM;
// };

// const matrizM = createMatriz();

// const newMatrixM = matrizM.map((row, index) => {
//     const multiplationElement = row[index];
//     return row.map((elemet) => {
//         return (elemet * multiplationElement);
//     });
// });

// console.log(newMatrixM);

/*Exercicio 35*/
// const vectorOdd = [];
// const vectorEven = [];

// const addVector = (value, vector) => {
//     if (vector.length < 5) {
//         vector.push(value);
//     } else {
//         console.log(vector);
//         vector.shift()
//         vector.push(value);
//     }
//     return vector;
// }

// for (let index = 0; index < 30; index++) {
//     const value = parseInt(prompt("Digite um valor: "));
//     if(value%2 === 0){
//         addVector(value, vectorOdd);
//     }else{
//         addVector(value, vectorEven);
//     };
// };

// console.log(vectorOdd);
// console.log(vectorEven);

/*Exercicio 36*/
// const Createresponse = () => {
//     const response = [];
//     for (let index = 0; index < 13; index++) {
//         response.push(parseInt(prompt(`Digite o numero da respota n° ${index + 1}: `)));
//     }
//     return response
// };

// const createPunter = (numberCard, responseUser) => {
//     return {
//         numberCard,
//         responseUser
//     }
// }

// const createListBettors = () => {

//     const bettors = [];

//     for (let index = 0; index < 100; index++) {
//         const numberCard = parseInt(prompt("Digite o número do cartão: "));
//         const responseCard = []
//         for (let index = 0; index < 13; index++) {
//             responseCard.push(parseInt(prompt(`Digite seu palpite numero ${index+1}: `)));
//         }

//         bettors.push(createPunter(numberCard, responseCard))
//     }

//     return bettors;
// }

// const userWinner = (list, response) => {
//     let count = 0
//     list.forEach(({numberCard, responseUser}) => {
//         responseUser.forEach((item, index) => {
//             count += item === response[index] && 1;
//         });
//         const messageSucess = count === response.length ? 'Parabéns, tu foi o GANHADOR' : '';
//         console.log(`O participante n°${numberCard} acertou ${count} numeros. ${messageSucess}`)
//     });
// }

// const response = Createresponse();
// const bettorsList = createListBettors();
// userWinner(bettorsList, response);

/*Exercicio 37*/
// const createCorrectResponse = () => {
//     const correctList = [];
//     for (let index = 0; index < 20; index++) {
//         const correctAlternative = prompt(`Digite a resposta da questão ${index+1}: `).toLowerCase();
//         correctList.push(correctAlternative);
//     };
//     return correctList;
// };

// const userResponse = (correctList) => {
//     const listResponseUser = []
//     let count = 0;
//     for(let i = 0; i < 20; i++){
//         const alternativeResponse = prompt("Digite a opção da alternativa: ").toLowerCase();
//         listResponseUser.push(alternativeResponse);
//     };

//     correctList.forEach((element, index) => {
//         console.log(count)
//         count = element === listResponseUser[index] ? count + 1 : count + 0;
//     });

//     const sucessOrNot = count >= 20 ? 'APROVADO' : 'REPROVADO' 

//     console.log(`Número de questões certas: ${count}. ${sucessOrNot}!`)
// };


// const AwnserList = createCorrectResponse()
// for (let index = 0; index < 50; index++) {
//     userResponse(AwnserList);
// };

/*Exercicio 38*/
// const calcOrder = (a, b) => {
//     if (a > b) {
//       return 1;
//     }
//     if (a < b) {
//       return -1;
//     }
//     return 0;
// }

// const calculator = {
//     1: (vector) => vector.reduce((acc, currentValue) => acc + currentValue, 0),

//     2: (vector) => vector.reduce((acc, currentValue) => acc * currentValue, 1),

//     3: (vector) => (vector.reduce((acc, currentValue) => acc + currentValue, 0))/vector.length,

//     4: (vector) => {
//         const a = [...vector]
//         a.sort(calcOrder);
//         return a;
//     },

//     5: (vector) => vector
// };

// const createVector = () => {
//     const vector =[]
//     for (let index = 0; index < 3; index++) {
//         vector.push(parseInt(prompt(`Digite o nº${index} número inteiro do vector: `)));
//     };
//     return vector;
// }


// const vector = createVector();
// const option = prompt(`
// 1- somadoselementos;
// 2- produto dos elementos;
// 3- média doselementos;
// 4- ordene os elementos em ordemcrescente;
// 5- mostre o vetor.
// Digite a opção desejada:
// `);
// console.log(calculator[option](vector));

/*Exercicio 39*/
// const createrVector = () => {
//     const response = [];
//     for (let index = 0; index < 100; index++) {
//         response.push(prompt(`Digite o item n°${index + 1}: `));
//     }
//     return response
// };

// const compactVector = (vector) => {
//     const vectorB = [...vector];

//     const verify = (value) => {
//         if(!(value < 0) && value){
//             return value;
//         }
//     }

//     return vectorB.filter(verify);
// }

// const vectorA = createrVector();

// const vectorV = compactVector(vectorA);

// console.log(vectorV);

/*Exercicio 40*/
// const createrAwserLoto = () => {
//     const response = [];
//     for (let index = 0; index < 5; index++) {
//         response.push(parseInt(prompt(`Digite a reposta do n°${index + 1}: `)));
//     }
//     return response
// };
// const createAwnserUser = () => {
//     const response = [];
//     for (let index = 0; index < 5; index++) {
//         response.push(parseInt(prompt(`Digite o palpite do n°${index + 1}: `)));
//     };
//     return response;
// }

// const verifyAwsers = (awserCorrectList, userList) => {
//     let count = 0;
//     userList.forEach((value, index) => {
//         count += value === awserCorrectList[index] && 1; 
//     });
//     if(count === awserCorrectList.length){
//         console.log("GANHADOR")
//     }else{
//         console.log('Hoje não!')
//     };
// }

// const app = (awserCorrectList) => {
//     for (let index = 0; index < 50; index++) {
//         const responseUser = createAwnserUser();
//         verifyAwsers(awserCorrectList, responseUser);
//     }
// }

// const awserLoto = createrAwserLoto();

// app(awserLoto);

/*Exercicio 41*/
// const people = {
//     name: 'Fulano',
//     age: '42'
// };

// console.log(people.age);

// people['email'] = 'fulano42@email.com';

// console.log(people.email);

/*Exercicio 42*/
// const date = {
//     dateString: 'uma string',
//     dateNumber: 2,
//     dateArray: [1, 2, 3, 4],
//     secondDateString: 'outra string',
//     secondDateArray: [1, 2, 3, 4],
// }

// const onlyVector = ({...date}) => {
//     const object = {}
//     for (const key in date){
//         if(Array.isArray(date[key])){
//             object[key] = date[key];
//         };
//     };
//     return object;
// }

// const dateArray = onlyVector(date);
// console.log(dateArray);

/*Exercicio 43*/
// const obj01 = {
//     name: 'Fulano',
//     age: 42
// };

// const obj2 = {
//     name: 'Beltrano',
//     cpf: 11223344
// };

// const unitObj = (obj1, obj2) => {
//     const obejctUnit = {...obj2};
//     for(const key in obj1){
//         if(!(key in obejctUnit)){
//             obejctUnit[key] = obj1[key];
//         };
//     };
//     return obejctUnit;
// };

// const obj3 = unitObj(obj01, obj2);

// console.log(obj3);

/*Exercicio 44*/
// const obj01 = {
//     name: 'Fulano',
//     age: 42,
//     phone: '00 9999-2222',
//     gender: 'M',
//     cpf: 11223344,
//     listGame: ['Final Fantasy', 'Dungeons & Dragons', 'Magic The Gathering']
// }

// const verifyStringInObject = (object) => {
//     let count = 0;
//     for(const key in object){
//         if(typeof(object[key]) === 'string'){
//             count++
//         };
//     };
//     return count;
// };

// const stringNumber = verifyStringInObject(obj01);
// console.log(`O numero de string dentro do objeto é ${stringNumber}`);

/*Exercicio 45*/
// const listFruts = ['uva', 'maça', 'abacaxi', 'tomate', 'limão', 'uva', 'abacate', 'abacaxi'];

// const createObject = (list) => {
//     const obj = {};

//     list.forEach(element => {
//         obj[element] = element in obj ? obj[element] += 1 : obj[element] = 1
//     });

//     return obj;
// }

// const objList = createObject(listFruts);
// console.log(objList);

/*Exercicio 46*/
// const salesDate = [
//     {
//         seller: 'Fulano',
//         saleValue: 300
//     },
//     {
//         seller: 'Cicrano',
//         saleValue: 200
//     },
//     {
//         seller: 'Fulano',
//         saleValue: 100
//     },
//     {
//         seller: 'Beltrano',
//         saleValue: 300
//     },
// ];

// const salesAmount = (listSellers) => {
//     const saleBySeller = {}
//     listSellers.forEach(({seller, saleValue}) => {
//         saleBySeller[seller] = seller in saleBySeller 
//         ? saleBySeller[seller] + saleValue 
//         : saleValue;
//     });
//     return saleBySeller;
// };

// const listSale = salesAmount(salesDate);
// console.log(listSale);

/*Exercicio 47*/
// const user = {
//     name: 'Fulano',
//     phone: '222222',
//     cpf: '1122334455'
// };

// const verifyIsString = (obj) => {
//     const objChecked = {};
//     for(const key in obj){
//         if(typeof(obj[key]) === 'string' ){
//             objChecked[key] = 'Valid';
//         };
//     };
//     return objChecked;
// };

// const verification = (obj, callback) => {
//     const newObj = callback(obj);
//     return newObj;
// };

// const userChecked = verification(user, verifyIsString);
// console.log(userChecked)

/*Exercicio 48*/
// const store01 = {
//     rice: 2,
//     bean: 4,
//     oil: 6,
//     flour: 1
// };

// const store02 = {
//     oil: 2,
//     tomato: 4,
//     salt: 1,
//     rice: 7
// }

// const totalStorage = (obj01, obj02) => {
//     const storage = {...obj01};
//     for (const key in obj02){
//         storage[key] = key in storage 
//         ? storage[key] + obj02[key] 
//         : obj02[key]
//     };
//     return storage;
// };

// const storage = totalStorage(store01, store02);
// console.log(storage);

/*Exercicio 49*/
// const transaction = [
//     {
//         id: 1,
//         value: 200,
//         time: "12/04/2024",
//         category: 'Deposito'
//     },
//     {
//         id: 2,
//         value: 100,
//         time: "1/04/2024",
//         category: 'Saque'
//     },
//     {
//         id: 3,
//         value: 2300,
//         time: "30/04/2024",
//         category: 'Emprestimo'
//     },
//     {
//         id: 4,
//         value: 100,
//         time: "10/05/2024",
//         category: 'Saque'
//     },
//     {
//         id: 5,
//         value: 1000,
//         time: "30/05/2024",
//         category: 'Deposito'
//     },
// ];

// const listTransaction = (list) => {
//     const totalTransaction = {};

//     list.forEach(({ category, value }) => {

//         if(category in totalTransaction){
//             totalTransaction[category].push(value);
//             totalTransaction[`${category}Total`] += value
//         }else{
//             totalTransaction[category] = []
//             totalTransaction[category].push(value);
//             totalTransaction[`${category}Total`] = value
//         }
//     });

//     return totalTransaction;

// }

// const list = listTransaction(transaction);
// console.log(list)

/*Exercicio 50*/
// Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
//  deverá ser capaz de interagir com o usuário através do console do navegador e manter
//  um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
//  informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
//  1.
//  EstruturadeDados:
//  ○ Hotel:Cada hotel deve ser um objeto com propriedades para id, nome,
//  cidade, quartos totais e quartos disponiveis.

//  ○ Reservas:Cada reserva deve ser um objeto contendo id Reserva, id Hotel, e
//  nome Cliente.

//  2. Funcionalidades:
//  1 - ○ Adicionarhotéis: Permitir que o usuário adicione novos hotéis ao sistema.

//  2 - ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
//  disponíveis em uma cidade específica.

//  3 - ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
//  deve diminuir o número de quartos disponiveis do hotel.

//  4 - ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
//  aumentar o númerodequartos disponiveis no hotel correspondente.

//  5 - ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
//  cliente.

//  3. Regras de Negócio:
//  ○ Um hotel só pode aceita rreservas se houver quartos disponíveis.
//  ○ As reservas devem ser identificadas por um ID único e associadas a um
//  único hotel.

//  4. DesafiosAdicionais (Opcionais):
//  ○ Implementar uma função decheck-in e check-out que atualize a
//  disponibilidade de quartos.
//  ○ Gerarrelatórios de ocupação para um hotel.
//  ○ Permitir que ousuário avalie o hotel após a estadia, e armazenar essas
//  avaliações dentro do objeto do hotel


const hoteisList = [];
const reservationsList = [];

const createReservations = (id, idHotel, nameClient) => {
    return {id, idHotel, nameClient};
}

const createhotel = (id, name, city, totalRoons, roonsAvaliables) => {
    return {id, name, city, totalRoons, roonsAvaliables};
};

const registerReservations = () => {
    //listar os hoteis com quartos diponiveis
    hoteisList.forEach(({id, name, roonsAvaliables}) => {
        if(roonsAvaliables > 0){
            console.log(`
            idHotel: ${id}
            Hotel: ${name}
            Quartos Disponiveis: ${roonsAvaliables}
            `);
        };
    });
    //pedir pro usuario o id do hotel desejado
    //pedir o nome do usuario
    //manipular o numero de quarto no hotel
    //add a reserva a lista de reservas
}

const registerHotel = () => {
    const date = [];
    date.push(hoteisList.length + 1);
    const listProperty = ['o nome do hotel', 'a cidade', 'o total de quartos', 'os quartos disponiveis']
    for (let index = 0; index < 4; index++) {
        let info = prompt(`Qual é ${listProperty[index]}?`);
        if(!isNaN(info)){
            info = Number(info);
        }
        date.push(info);
    }
    
    const hotel = createhotel(...date);
    hoteisList.push(hotel);
}

const objMenu = {
    '1': registerHotel,
    '2': 'Buscar hoteis por cidade',
    '3': registerReservations,
    '4': 'Cancelar reserva',
    '5': 'Listar reservas'
}

const menu = () => {
    let option = '0'
    while(option !== "6"){

        option = prompt(`Escolha um opção:
        1 - Registrar Hotel
        2 - Buscar hoteis por cidade
        3 - Fazer reserva
        4 - Cancelar reserva
        5 - Listar reservas
        6 - sair do sistema`);
        
        if(typeof(objMenu[option]) === 'function'){
            objMenu[option]();
        }
    }

}

menu()
console.log(hoteisList)
// registerHotel()
// let nomeUsuario = prompt("Qual é o seu nome?");
// console.log(hotel01);