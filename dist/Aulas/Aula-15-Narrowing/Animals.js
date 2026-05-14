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
        return;
    }
    else if (animal instanceof Cat) {
        animal.meow();
        return;
    }
}
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
        return;
    }
    else if ("fly" in animal) {
        animal.fly();
        return;
    }
}
export {};
