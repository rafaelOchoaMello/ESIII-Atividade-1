const Faker = require('faker');
const Prompt  = require('prompt-sync');

const input = Prompt();
Faker.locale = 'pt_BR';

const fakerData = [];

function LoadData() {
    console.log('\n-----------(Atividade ESII - Rafael Ochôa Mello)-----------');

    const maxLastPurchaseDate = input('> Favor informar limite de anos comprados :: ');
    const maxCountPurchaseAmount = input('> Favor informar limite de produtos comprados :: ');

    for (let i = 0; i < 10; i++) {
        const newData = {
            name: Faker.name.findName(),
            birthday: Faker.date.between('1910', '2019'),
            genre: Faker.music.genre(),
            lastPurchaseDate: Faker.date.past(parseInt(maxLastPurchaseDate)),
            countPurchase: Faker.datatype.number(parseInt(maxCountPurchaseAmount), 1)
        }
        fakerData.push(newData);
    }
    console.log('-----------------------------------------------------------\n');
}

LoadData();
console.log(fakerData); 