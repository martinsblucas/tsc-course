// string
let name2: string = 'Lucas';
console.log(name2);
// nome = 27;

// numbers
let age: number = 25;
age = 25.9;
console.log(age);

// boolean
let hasHobbies: boolean = true;
hasHobbies = false;
console.log(hasHobbies);

// explicit types
let age2: any;
age2 = 25;
console.log(typeof age2);
age2 = 'Idade: 25';
console.log(typeof age2);

// array
let hobbies: any[] = ['Cozinhar', 'Jogar videogame'];
hobbies.push(100);
console.log(hobbies);

// tuplas
let address: [string, number, string] = ['Rua Barão de Guaratiba', 157, ''];
console.log(address);

// enums
enum color {
    gray,
    black,
    white,
    red
}
let favoriteColor: color = color.red;
console.log(color);
console.log(favoriteColor);

// functions
function returnName(): string {
    return name2;
}
console.log(returnName());
function sayHello(): void {
    console.log('Hello!');
}
sayHello();
function multiply(numA: number, numB: number): number {
    return numA * numB;
}
console.log(multiply(4, 2));

// function type
let calculate: (x: number, y: number) => number;
calculate = multiply;
console.log(calculate(4,4));

// objects
let user: { name: string, age: number } = {
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
const hitSpot = ( hour: number ): string => {
        if(hour <= 8)
            return 'Ponto normal';
        else
            return 'Fora do ponto';
};
let employee: {
    supervisors: string[],
    hitSpot: (hour: number) => string
};
employee = {
    supervisors: ['João', 'Fabio', 'Felipe'],
    hitSpot: hitSpot
};
console.log('Supervisores: ', employee.supervisors);
console.log('Batendo ponto às 10: ', employee.hitSpot(10));
console.log('Batendo ponto às 8: ', employee.hitSpot(8));

// alias
type employee = {
    supervisors: string[],
    hitSpot: (hour: number) => string
};
let employee2: employee = {
    supervisors: ['Rodrigo', 'Jorge', 'Jonas'],
    hitSpot: hitSpot
};
console.log('Supervisores(2): ', employee2.supervisors);
console.log('Batendo ponto às 10(2): ', employee2.hitSpot(10));
console.log('Batendo ponto às 8(2): ', employee2.hitSpot(8));
let employee3: employee = {
    supervisors: ['Leonardo', 'Bruno', 'Ricardo'],
    hitSpot: hitSpot
};
console.log('Supervisores(3): ', employee3.supervisors);
console.log('Batendo ponto às 10(3): ', employee3.hitSpot(10));
console.log('Batendo ponto às 8(3): ', employee3.hitSpot(8));

// union types
let rating: number | string = 10;
console.log(`Minha nota é ${rating}`);
rating = '9';
console.log(`Minha nota é ${rating}`);

// never
const fail = (msg: string):never => {
    throw new Error(msg);
};
const product = {
    name: 'Sabão',
    price: -1,
    validateProduct() {
        if(this.price <= 0) {
            fail('Preço inválido');
        }
    }
};
try {
    product.validateProduct();
} catch (e) {
    console.error(e.message);
}

// optional values
let optionalHeight: null | number = 12;
console.log(optionalHeight);
optionalHeight = null;
console.log(optionalHeight);