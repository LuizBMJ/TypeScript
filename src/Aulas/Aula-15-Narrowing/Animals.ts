

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

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
    return;
  } else if (animal instanceof Cat) {
    animal.meow();
    return;
  }
}

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
    return;
  } else if ("fly" in animal) {
    animal.fly();
    return;
  }
}