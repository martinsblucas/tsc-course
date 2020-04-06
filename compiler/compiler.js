"use strict";
let channel = 'Gaveta';
let subscribers = 610234;
// channel = subscribers;
console.log(channel);
const salute = (isMorning, hour) => {
    //let a; //se descomentado, lança um erro. noUnusedLocals = true
    let salutation;
    hour; //se comentado, lança um erro. noUnusedParameters = true
    salutation = isMorning ? "Bom dia!" : "Boa vida!";
    return salutation;
};
console.log(salute(true, 10));
//# sourceMappingURL=compiler.js.map