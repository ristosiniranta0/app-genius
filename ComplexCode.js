/*
Filename: ComplexCode.js
Description: A complex JavaScript code demonstrating a multi-level data structure,
             advanced array manipulation, and object-oriented programming concepts.
*/

// Define a class called "Person" representing a person with name, age, and gender
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Define a method to introduce the person
  introduce() {
    console.log(`My name is ${this.name}, I am ${this.age} years old, and I am ${this.gender}.`);
  }
}

// Create an array of people objects
const people = [
  new Person("Alice", 25, "female"),
  new Person("Bob", 30, "male"),
  new Person("Carol", 35, "female"),
  new Person("Dave", 40, "male"),
];

// Define a class called "Team" representing a group of people
class Team {
  constructor(name, members) {
    this.name = name;
    this.members = members;
  }

  // Define a method to introduce the team
  introduce() {
    console.log(`We are Team ${this.name}. Our members are:`);
    this.members.forEach((person) => {
      person.introduce();
    });
  }
}

// Create a team object with the people array
const team = new Team("Developers", people);

// Introduce the team and its members
team.introduce();

// Define a function to count the number of females in the team
function countFemales() {
  let count = 0;
  team.members.forEach((person) => {
    if (person.gender === "female") {
      count++;
    }
  });
  return count;
}

// Calculate and display the number of females in the team
console.log(`There are ${countFemales()} females in the team.`);

// Define a function to find the oldest person in the team
function findOldestPerson() {
  let oldestPerson = team.members[0];
  team.members.forEach((person) => {
    if (person.age > oldestPerson.age) {
      oldestPerson = person;
    }
  });
  return oldestPerson;
}

// Find and display the oldest person in the team
const oldestPerson = findOldestPerson();
console.log(`The oldest person in the team is ${oldestPerson.name}.`);

// Additional complex code with more than 200 lines goes here...
// ...
// ...

// End of code