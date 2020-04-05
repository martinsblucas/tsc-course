"use strict";
// string
var name2 = 'Lucas';
console.log(name2);
// nome = 27;
// numbers
var age = 25;
age = 25.9;
console.log(age);
// boolean
var hasHobbies = true;
hasHobbies = false;
console.log(hasHobbies);
// explicit types
var age2;
age2 = 25;
console.log(typeof age2);
age2 = 'Idade: 25';
console.log(typeof age2);
// array
var hobbies = ['Cozinhar', 'Jogar videogame'];
hobbies.push(100);
console.log(hobbies);
// tuplas
var address = ['Rua Barão de Guaratiba', 157, ''];
console.log(address);
// enums
var color;
(function (color) {
    color[color["gray"] = 0] = "gray";
    color[color["black"] = 1] = "black";
    color[color["white"] = 2] = "white";
    color[color["red"] = 3] = "red";
})(color || (color = {}));
var favoriteColor = color.red;
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
var calculate;
calculate = multiply;
console.log(calculate(4, 4));
// objects
var user = {
    name: 'João',
    age: 26
};
console.log(user);
user = {
    name: "Maria",
    age: 36
};
console.log(user);
// Desafio
/*
Criar um objeto funcionário com:
- Array de strings com os nomes dos supervisores
- Função de bater ponto que recebe a hora (number) e retorna uma string
    - Ponto normal (<= 8)
    - Fora do horário (> 8)
 */
var hitSpot = function (hour) {
    if (hour <= 8)
        return 'Ponto normal';
    else
        return 'Fora do ponto';
};
var employee;
employee = {
    supervisors: ['João', 'Fabio', 'Falipe'],
    hitSpot: hitSpot
};
console.log('Supervisores: ', employee.supervisors);
console.log('Batendo ponto às 10: ', employee.hitSpot(10));
console.log('Batendo ponto às 8: ', employee.hitSpot(8));
