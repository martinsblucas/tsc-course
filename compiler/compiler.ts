let channel: string = 'Gaveta';
let subscribers: number = 610234;

// channel = subscribers;
console.log(channel);

const salute = (isMorning: boolean, hour: number): string => {
    //let a; //se descomentado, lança um erro. noUnusedLocals = true
    let salutation: string;
    hour; //se comentado, lança um erro. noUnusedParameters = true
    salutation = isMorning ? "Bom dia!" : "Boa vida!";
    return salutation;
};

console.log(salute(true, 10));