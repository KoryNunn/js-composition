var animalConstructors = {
    dog: require('./dog'),
    cat: require('./cat'),
    greyhound: require('./greyhound')
};

module.exports = function(settings){
    var animal = {};

    animal.name = settings.name;
    animal.born = settings.born;

    animal.age = function(){
        return Date.now() - animal.born;
    };

    animal.sayName = function(){
        console.log(animal.name);
    };

    if(settings.type in animalConstructors){
        animalConstructors[settings.type](animal, settings);
    }

    return animal;
};