function generate(type) {
    switch (type) {
        case "person":
            return { name: "Alice", age: 30 };
        case "dog":
            return { name: "Rex", breed: "Labrador" };
        case "house":
            return { address: "123 Main St", size: 120 };
    }
}
const person = generate("person");
console.log(person.name);
console.log(person.age);
export {};
