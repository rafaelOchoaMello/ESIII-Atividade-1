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
            genre: Faker.music.genre(),
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

