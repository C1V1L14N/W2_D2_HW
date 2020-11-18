const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {

    park = new Park('Dino Disaster Dome', 10)

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Disaster Dome')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('triceratops');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('triceratops');
    park.addDinosaur('raptor');
    park.addDinosaur('diplodicus');
    park.removeDinoByName('diplodicus');
    const expected = ['triceratops', 'raptor'];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(expected, actual)
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    dino1 = Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dino1)
    dino2 = Dinosaur('raptor', 'carnivore', 45);
    park.addDinosaur(dino2)
    dino3 = Dinosaur('spinasaurus', 'carnivore', 60);
    park.addDinosaur(dino3)
    const actual = Math.max(park.dinosaurs.Dinosaur)
    assert.strictEqual(actual, 60)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
