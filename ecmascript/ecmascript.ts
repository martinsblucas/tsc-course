// let & const & var (hoisting)

// console.log(seraQuePode);
// var seraQuePode = '?';
// let seraQuePode = '?';

// arrow function
import enumerate = Reflect.enumerate;

const subtract = (n1: number, n2: number):number => n1-n2;
console.log(subtract(4, 1));

// this
// function normalFunctionWithThis() {
//     console.log(this);
// };
// const specialFunctionWithThis = normalFunctionWithThis.bind('abc');
// const arrowWithThis = () => console.log(this);
// normalFunctionWithThis();
// specialFunctionWithThis();
// arrowWithThis();

// default parameters
function countdown(start: number = 3, finish: number = start - 5):void {
    console.log(start);
    while (start > finish) {
        start--;
        console.log(start);
    }
    console.log('Fim!');
}
countdown();
countdown(5);

// rest & spread
const numbers: number[] = [1, 10, 99, -5];
console.log("O maior número do array é", Math.max(...numbers) );

const classA: string[] = ['João', 'Maria', 'José'];
const classB: string[] = ['Bruna', 'Carlos', 'Matheus', ...classA];
console.log(classB);

function returnArray(...args: number[]): number[] {
    return args;
}
const numbers2 = returnArray(1, 2, 3, 4, 5, 6);
console.log(numbers2);

// rest & spreads (tuples)
const tuple: [number, string, boolean] = [1, 'abc', false];
function tupleParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
}
function tupleParam2(...params: [number, string, boolean]): void {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}
tupleParam1(...tuple);
tupleParam2(...tuple);

// destructuring (array)
const attributes: [string, number] = ['Motor Zetec 1.8', 2020];
const [motor, year] = attributes;
console.log("Motor: ", motor);
console.log("Ano:", year);

// destructuring (objects)
const items: {name: string, price: number} = {
    name: 'SSD 480GB',
    price: 200
};
const { name: n, price: p } = items;
console.log("Nome do item: ", n);
console.log("Preço do item: ", p);

// template string
const userId: string = 'SuporteCod3r';
const notifications: string = '10';
const welcome: string = `Boas vindas ${userId},
Notificações: ${parseInt(notifications) > 9 ? '+9' : notifications}`;
console.log(welcome);

//challenge 3

//1
const double = (value: number): number => value*2;
console.log("Exercício 1: ", double(10));

//2
const sayHelloAgain = (name: string = 'Pessoa'): void => {
    console.log(`Olá, ${name}`);
};
sayHelloAgain();
sayHelloAgain('Anna');

//3
const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

//4
const array = [55, 20];
array.push(...nums);
console.log(array);

//5
const performance2: number[] = [8.5, 6.3, 9.4];
const [av1, av2, av3] = performance2;
console.log(av1, av2, av3);

//6
const scientist: {
    firstName: string,
    experience: number
} = {
    firstName: 'Will',
    experience: 12
};
const { firstName: fn, experience: xp } = scientist;
console.log(fn, xp);

// promisses

function await3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000)
}

await3s((result: string) => {
    console.log(result);
});

function await3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois...');
        }, 3000)
    });
}
await3sPromise()
    .then(data => console.log(data));

fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(character => character.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(film => console.log(film));