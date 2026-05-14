const value: unknown = "Hello World";
const strLength: number = (value as string).length;
console.log(strLength);

const data: unknown = { name: "Jorge" };
const name = (data as { name: string }).name;
console.log(name);

type Color = "red" | "green" | "blue";

const myColor = "red" satisfies Color;
console.log(myColor);

type Coordinate = { x: number; y: number };

const point = { x: 10, y: 20 } satisfies Coordinate;
console.log(point);

const nome: string = "Jorge";
const idade: number = 30;
const isActive: boolean = true;

function greet(person: string): string {
  return `Hello, ${person}!`;
}

const message: string = greet("Jorge");
console.log(message);

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Jorge",
  email: "jorge@example.com"
};
console.log(user);

type Status = "pending" | "loading" | "success" | "error";

const status: Status = "loading";
console.log(status);