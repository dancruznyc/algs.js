"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);

// 1. new empty object created
// 2. function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically returns {}

console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
const jay = {};
console.log(matilda, jack);

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

jonas.calcAge();

Person.prototype.species = "Homo Sapiens";

console.log(jonas.species);

// car with make and speed km/h
// accelerate method increase by 10 log new speed to console
// brake method decrease by 5 and log
// create 2 car objects

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car("BMW", 120);
const Benz = new Car("Mercedes", 95);

console.log(BMW);
console.log(Benz);

BMW.accelerate();
BMW.accelerate();
BMW.brake();

class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCL("Jessica", 1996);
console.log(jessica);

PersonCL.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
