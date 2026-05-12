

class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound(): void {
        console.log(`${this.name} faz um som!`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    makeSound(): void {
        console.log(`${this.name} late!`);
    }
}

const dog = new Dog("Rex", 5, "Labrador");
dog.makeSound(); // Rex late!