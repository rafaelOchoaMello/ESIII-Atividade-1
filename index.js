const Faker = require('faker');
const Prompt = require('prompt-sync');

const input = Prompt();
Faker.locale = 'pt_BR';

const fakerData = [];

function LoadData() {
    console.log('\n-----------(Atividade ESII - Rafael Ochôa Mello)-----------');

    const maxLastPurchaseDate = input('> Favor informar limite de anos comprados :: ');
    const maxCountPurchaseAmount = input('> Favor informar limite de produtos comprados :: ');

    for (let i = 0; i < 1000; i++) {
        const newData = {
            name: Faker.name.findName(),
            birthday: Faker.date.between('1910', '2019'),
            genre: Faker.name.genre(),
            lastPurchaseDate: Faker.date.past(parseInt(maxLastPurchaseDate)),
            countPurchase: Faker.datatype.number(parseInt(maxCountPurchaseAmount), 1)
        }
        fakerData.push(newData);
    }
    console.log('-----------------------------------------------------------');
}

LoadData();

/* < Exc 1 > -----------------------------------------------------------------
 Desenvolva, utilizando filter , uma função que, dado um caractere de entrada,
retorne todos os registros de clientes cujo o nome inicia com o caractere. */
console.log('[Exercício 1] --- ');
function excOne() {
    const initialLetter = input('> Informe a letra inicial :: ');
    const data = fakerData.filter((data) => data.name[0].toLowerCase() === initialLetter[0].toLowerCase());

    return data;
}
const excOne_results = excOne();
/* console.log(excOne_results); */


/* < Exc 2 > -----------------------------------------------------------------
 Retorne o array de clientes */
console.log('[Exercício 2] --- ');
function excTwo() {
    const data = fakerData.map((data) => data);
    return data;
}
const excTwo_results = excTwo();
/* console.log(excTwo_results); */


/* < Exc 3 > -----------------------------------------------------------------
 Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número
com o total de registros encontrados. */
console.log('[Exercício 3] --- ');
function excThre() {
    const initialLetter = input('> Informe a letra inicial :: ');
    const data = fakerData.reduce((count, data) => {
        data.name[0].toLowerCase() === initialLetter[0].toLowerCase()
            ? count++
            : count
        return count;
    }, 0);

    return data;
}
const excThre_results = excThre();
console.log(`Exercício 1 (length) : ${excOne_results.length} || Exercício 3 (resultado) : ${excThre_results}`);


/* < Exc 4 > -----------------------------------------------------------------
Desenvolva uma função que retorne apenas os nomes dos clientes. */
console.log('[Exercício 4] --- ');
function excFour() {
    const data = fakerData.map((data) => data.name);
    return data;
}
const excFour_results = excFour();
/* console.log(excFour_results); */


/* < Exc 5 > -----------------------------------------------------------------
Desenvolva uma função que retorne apenas o primeiro nome dos clientes. */
console.log('[Exercício 5] --- ');
function excFive() {
    const data = fakerData.map((data) => data.name.split(' ')[0]);
    return data;
}
const excFive_results = excFive();
/* console.log(excFive_results);  */

/* < Exc 6 > -----------------------------------------------------------------
Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes
começam com o caractere de entrada da função. */
console.log('[Exercício 6] --- ');
function excSix() {
    const initialLetter = input('> Informe a letra inicial :: ');
    const data = fakerData.filter((data) => data.name[0].toLowerCase() === initialLetter[0].toLowerCase())
        .map((data) => data.name.split(' ')[0]);

    return data;
}
const excSix_results = excSix();
console.log(excSix_results);

/* < Exc 7 > -----------------------------------------------------------------
Desenvolva uma função que retorne todos os usuários que são maiores de idade.*/
console.log('[Exercício 7] --- ');
function excSeven() {
    const date = new Date();
    const currentYear = parseInt(date.getFullYear());

    const data = fakerData.filter((data) => (currentYear - parseInt(data.birthday.toString().split(' ')[3])) >= 18);

    return data;
}
const excSeven_results = excSeven();
/* console.log(excSeven_results); */

/* < Exc 8 > -----------------------------------------------------------------
Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.*/
console.log('[Exercício 8] --- ');
function excEight() {
    const nameToFind = input('> Favor informar o nome a ser pesquisado :: ');
    const data = fakerData.find((data) => data.name.split(' ')[0].toString().toLowerCase() === nameToFind.toLocaleLowerCase());

    return typeof data !== 'undefined' ? true : false
}
const excEight_results = excEight();
console.log(excEight_results);


/* < Exc 9 > -----------------------------------------------------------------
Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes. */
console.log('[Exercício 9] --- ');
function excNine() {
    const data = fakerData.reduce((count, data) => count + data.countPurchase, 0);
    return data;
}
const excNine_results = excNine();
console.log(excNine_results);


/* < Exc 10 > -----------------------------------------------------------------
Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano. */
console.log('[Exercício 10] --- ');
function excTen() {
    const date = new Date();
    const currentYear = parseInt(date.getFullYear());

    const data = fakerData.filter((data) =>
        (currentYear - parseInt(data.lastPurchaseDate.toString().split('-')[0].split(' ')[3])) > 1
    );

    return data;
};
const excTen_results = excTen();


/* console.log(excTen_results); */
/* < Exc 11 > -----------------------------------------------------------------
Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras. */
console.log('[Exercício 11] --- ');
function excEleven() {
    const data = fakerData.filter((data) => data.countPurchase > 15);

    return data;
}
const excEleven_results = excEleven();
console.log(excEleven_results);