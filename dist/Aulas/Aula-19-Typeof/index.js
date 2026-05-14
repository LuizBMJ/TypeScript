const user = {
    name: "Jorge",
    age: 30,
    isActive: true
};
const newUser = {
    name: "Maria",
    age: 25,
    isActive: false
};
console.log(newUser);
function createUser(name, age) {
    return { name, age, isActive: true };
}
const userCreated = createUser("Pedro", 28);
console.log(userCreated);
const users = [
    { id: 1, name: "Jorge" },
    { id: 2, name: "Maria" }
];
const singleUser = { id: 3, name: "Carlos" };
console.log(singleUser);
const greeting = "Hello";
const message = "World";
console.log(message);
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const pointConstructor = Point;
const instance = new pointConstructor(10, 20);
console.log(instance);
const value = "test";
const anotherValue = "test2";
console.log(anotherValue);
export {};
