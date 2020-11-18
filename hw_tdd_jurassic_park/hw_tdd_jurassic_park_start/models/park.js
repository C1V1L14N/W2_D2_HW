


const Park = function(name, price, dinosaurs){
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
}


Park.prototype.addDinosaur = function(dino){
    this.dinosaurs.push(dino);
}

Park.prototype.removeDinoByName = function(name){
    const indexOfDino = this.dinosaurs.indexOf(name);
    this.dinosaurs.splice(indexOfDino, 1);
}

// Taxi.prototype.removePassengerByName = function(passenger){
//     const indexOfPassenger = this.passengers.indexOf(passenger);
//     this.passengers.splice(indexOfPassenger, 1);

module.exports = Park;