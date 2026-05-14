class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} faz um som!`);
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} late!`);
    }
}
const dog = new Dog("Rex", 5, "Labrador");
dog.makeSound();
export {};
