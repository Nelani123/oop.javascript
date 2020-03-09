class Person {
    constructor(name, age, gender, interests) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
    Hello() {
      return `Hello, my name is ${this.name} and i am ${this.age} years old. I am a ${this.gender} My interests are ${this.interests}`
    }
  }
  
  let person = new Person("Ryan", 30, "male", [
    "being a hardarse",
    "agile",
    "ssd hard drives"
  ]);
  let greeting = person.Hello()
  console.log(greeting);
  
  module.exports = { Person }
  