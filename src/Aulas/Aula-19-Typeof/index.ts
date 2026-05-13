// Typeof operator for type manipulation

const user = {
  name: "Jorge",
  age: 30,
  isActive: true
};

type UserType = typeof user;

const newUser: UserType = {
  name: "Maria",
  age: 25,
  isActive: false
};

console.log(newUser);

// Extracting type from function
function createUser(name: string, age: number) {
  return { name, age, isActive: true };
}

type CreateUserReturn = ReturnType<typeof createUser>;

const userCreated: CreateUserReturn = createUser("Pedro", 28);
console.log(userCreated);

// Extracting type from array
const users = [
  { id: 1, name: "Jorge" },
  { id: 2, name: "Maria" }
];

type UserArray = typeof users;
type UserElement = UserArray[number];

const singleUser: UserElement = { id: 3, name: "Carlos" };
console.log(singleUser);

// Typeof with primitive
const greeting = "Hello";
type GreetingType = string;

const message: GreetingType = "World";
console.log(message);

// Typeof with class
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type PointType = typeof Point;

const pointConstructor: PointType = Point;
const instance = new pointConstructor(10, 20);
console.log(instance);

// Using typeof with union types
type StringOrNumber = string | number;

const value: string | number = "test";
type ValueType = typeof value;

const anotherValue: ValueType = "test2";
console.log(anotherValue);