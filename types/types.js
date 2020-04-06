"use strict";
// string
let name2 = 'Lucas';
console.log(name2);
// nome = 27;
// numbers
let age = 25;
age = 25.9;
console.log(age);
// boolean
let hasHobbies = true;
hasHobbies = false;
console.log(hasHobbies);
// explicit types
let age2;
age2 = 25;
console.log(typeof age2);
age2 = 'Idade: 25';
console.log(typeof age2);
// array
let hobbies = ['Cozinhar', 'Jogar videogame'];
hobbies.push(100);
console.log(hobbies);
// tuplas
let address = ['Rua Barão de Guaratiba', 157, ''];
console.log(address);
// enums
var color;
(function (color) {
    color[color["gray"] = 0] = "gray";
    color[color["black"] = 1] = "black";
    color[color["white"] = 2] = "white";
    color[color["red"] = 3] = "red";
})(color || (color = {}));
let favoriteColor = color.red;
console.log(color);
console.log(favoriteColor);
// functions
function returnName() {
    return name2;
}
console.log(returnName());
function sayHello() {
    console.log('Hello!');
}
sayHello();
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(4, 2));
// function type
let calculate;
calculate = multiply;
console.log(calculate(4, 4));
// objects
let user = {
    name: 'João',
    age: 26
};
console.log(user);
user = {
    name: "Maria",
    age: 36
};
console.log(user);
// challenge
/*
Criar um objeto funcionário com:
- Array de strings com os nomes dos supervisores
- Função de bater ponto que recebe a hora (number) e retorna uma string
    - Ponto normal (<= 8)
    - Fora do horário (> 8)
 */
const hitSpot = (hour) => {
    if (hour <= 8)
        return 'Ponto normal';
    else
        return 'Fora do ponto';
};
let employee;
employee = {
    supervisors: ['João', 'Fabio', 'Felipe'],
    hitSpot: hitSpot
};
console.log('Supervisores: ', employee.supervisors);
console.log('Batendo ponto às 10: ', employee.hitSpot(10));
console.log('Batendo ponto às 8: ', employee.hitSpot(8));
let employee2 = {
    supervisors: ['Rodrigo', 'Jorge', 'Jonas'],
    hitSpot: hitSpot
};
console.log('Supervisores(2): ', employee2.supervisors);
console.log('Batendo ponto às 10(2): ', employee2.hitSpot(10));
console.log('Batendo ponto às 8(2): ', employee2.hitSpot(8));
let employee3 = {
    supervisors: ['Leonardo', 'Bruno', 'Ricardo'],
    hitSpot: hitSpot
};
console.log('Supervisores(3): ', employee3.supervisors);
console.log('Batendo ponto às 10(3): ', employee3.hitSpot(10));
console.log('Batendo ponto às 8(3): ', employee3.hitSpot(8));
// union types
let rating = 10;
console.log(`Minha nota é ${rating}`);
rating = '9';
console.log(`Minha nota é ${rating}`);
// never
const fail = (msg) => {
    throw new Error(msg);
};
const product = {
    name: 'Sabão',
    price: -1,
    validateProduct() {
        if (this.price <= 0) {
            fail('Preço inválido');
        }
    }
};
try {
    product.validateProduct();
}
catch (e) {
    console.error(e.message);
}
// optional values
let optionalHeight = 12;
console.log(optionalHeight);
optionalHeight = null;
console.log(optionalHeight);
let account;
let accountHolder;
account = {
    balance: 3456,
    deposit(value) {
        this.balance += value;
    }
};
accountHolder = {
    name: 'Ana Silva',
    account: account,
    contacts: ['34567890', '98765432']
};
console.log('Correntista', accountHolder);
console.log('Saldo da conta', accountHolder.account.balance);
accountHolder.account.deposit(100);
console.log('Depósito de 100 reais', accountHolder.account.balance);
//# sourceMappingURL=types.js.map