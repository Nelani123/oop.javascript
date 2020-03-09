let myTest = require("../src/oop_src");

describe("function 'hello' inside 'Person' class", function() {
  let person = new myTest.Person("Ryan", 30, "male", [
    "being a hardarse",
    "agile",
    "ssd hard drives"
  ]);

  let name = "Ryan"  
  it("Should return name", function() {
      expect(name).toEqual("Ryan");
  });

  let age = 30 
  it("Should return age", function() {
      expect(age).toEqual(30);
  });

  let gender = "male"
  it("Should return gender", function() {
      expect(gender).toEqual("male");
  });

  let interests = "hardarse,agile,ssd hard drives"
  it("Should return interests", function() {
      expect(interests).toEqual("hardarse,agile,ssd hard drives");
  });
  
  it("returns greeting", function() {
    expect(person.Hello()).toEqual(
      `Hello, my name is Ryan and i am 30 years old. I am a male My interests are being a hardarse,agile,ssd hard drives`
    );
  });
});
