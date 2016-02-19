var dog = require('./dog');

module.exports = function(greyhound, settings){
    dog(greyhound, settings);

    dog.speed = 60;

    return greyhound;
};