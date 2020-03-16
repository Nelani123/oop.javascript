class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    };
    hello() {
        return `Hello, my name is ${this.name} and i am ${this.age}. I am a ${this.gender} My interests are ${this.interests}`;
        };
    };
    var person = new Person('male', 30, 'male', ['being a hardarse', 'agile', 'ssd hard drives']);
    var greeting = person.hello()
    console.log(greeting);

    module.exports = { Person }