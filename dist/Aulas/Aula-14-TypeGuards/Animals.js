class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else if (animal instanceof Cat) {
        animal.meow();
    }
}
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else if ("fly" in animal) {
        animal.fly();
    }
}
export {};
