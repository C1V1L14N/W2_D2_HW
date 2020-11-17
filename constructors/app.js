const Pet = require("./pet")
const Person = require("./person")

const scooby = new Pet("Scooby Doo", "Dog");
scooby.eat("Scooby Snacks");

const shaggy = new Person("Shaggy Rogers", scooby);
shaggy.greet();
shaggy.feedPet("Scooby Snack");