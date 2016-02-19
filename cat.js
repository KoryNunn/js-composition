module.exports = function(cat, settings){

    cat.speed = 25;

    cat.sayName = function(){
        console.log('meow');
    };

    return cat;
};