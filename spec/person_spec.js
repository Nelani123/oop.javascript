let myTest = require("../src/person_src");

let person = new myTest.Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("'hello' method inside 'Person' class", function() {
  it("Should return name", function() {
    expect(person.name).toEqual("Ryan");
  });

  it("Should return age", function() {
    expect(person.age).toEqual(30);
  });

  it("Should return gender", function() {
    expect(person.gender).toEqual("male");
  });

  it("Should return interests", function() {
    expect(person.interests).toEqual([
      "being a hardarse",
      "agile",
      "ssd hard drives"
    ]);
  });

  describe("'hello' method inside 'Person' class", function() {
    it("returns greeting", function() {
      expect(person.hello()).toEqual(
        `Hello, my name is Ryan and i am 30. I am a male My interests are being a hardarse,agile,ssd hard drives`
      );
    });
  });
});
