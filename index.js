var makeAnimal = require('./animal');

var ellie = makeAnimal({
    type: 'greyhound',
    born: new Date(2014, 1, 1)
});

var pepper = makeAnimal({
    type: 'cat',
    born: new Date(2012, 1, 1)
});

ellie.sayName();
pepper.sayName();

console.log(ellie.age());
console.log(pepper.age());