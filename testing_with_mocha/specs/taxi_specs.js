const assert = require('assert');
const Taxi = require('../taxi.js');



describe('Taxi', function(){
    let taxi;
    beforeEach( function() {
        taxi = new Taxi('Toyota', 'Prius', 'Kenneth');    //Arrange
    });
    it('should have a manufacturer', function(){
        const actual = taxi.manufacturer;           //Act
        assert.strictEqual(actual, 'Toyota');       //Assert
    });


    it('should have a model', function(){
        const actual = taxi.model;                  //Act
        assert.strictEqual(actual, 'Prius');         //Assert
    });

    it('should have a driver', function(){
        const actual = taxi.driver;                 //Act
        assert.strictEqual(actual, 'Kenneth')       //Assert
    });

    describe('passengers', function(){
        it('should start with no passengers', function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });
        it('should be able to count passenges', function(){
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0)
        });

        it('should be able to add passengers', function(){
            taxi.addPassenger('Ian');
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 1)
        });

        it('should be able to remove passenger by name', function(){
            taxi.addPassenger('Ian');
            taxi.addPassenger('Ruth');
            taxi.removePassengerByName('Ruth');
            const expected = ['Ian'];
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, expected);
        });

        it('should be able to remove all passengers', function(){
            taxi.addPassenger('Ian');
            taxi.addPassenger('Ruth');
            taxi.removeAllPassengers();
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);

        });
    });
});



