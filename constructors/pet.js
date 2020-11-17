const Pet = function(name, species, food, game){
    this.name = name;
    this.species = species;
    
    
}

Pet.prototype.eat = function(food){
    console.log(`${this.name} ate a ${food}!`);
}

const jambo = new Pet('Jambo', 'doggy');
// console.log("My pet:", jambo);
// jambo.eat('sausages');

const rita = new Pet('Rita', 'chimpanzee');
// console.log("My pet:", rita);
// rita.eat('big nanas');


module.exports = Pet;