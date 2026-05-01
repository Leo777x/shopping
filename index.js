class Person {
    
    
    
    
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    
    
    
    introduce(){
      console.log(`My name is ${this.name} and I am ${this.age}`);
    }
    greet() {
      console.log("Hi, how do you do!");
    }
    
    
    static help(){
      console.log("Hi i am Person class, how can i help you?");
    }
    static serialNumber = 65;
  }

  const person1 = new Person('martin', 33);
const person2 = new Person('John', 38);
const person3 = new Person('Daniel', 40);

person1.greet();
person1.introduce();

person2.greet();
person2.introduce();

person3.greet();
person3.introduce();
