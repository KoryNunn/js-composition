module.exports = function(dog, settings){

    dog.speed = 40;

    dog.age = function(){
        return (Date.now() - dog.born) * 7;
    };

    dog.sayName = function(){
        console.log('woof');
    };

    return dog;
};