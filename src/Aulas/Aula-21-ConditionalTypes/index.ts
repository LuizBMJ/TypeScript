
type Conditional<T> = T extends string ? "É uma string" : "Não é uma string";

function conditional<T>(value: T): Conditional<T> {
  const text = typeof value === "string"
  ? "É uma string"
  : "Não é uma string"
  return text as Conditional<T>;
}

const result = conditional(22);

class SelectMenu {};
class Checkbox {};
class Input {};
class Button {};

type ElementType = "input" | "button" | "selectmenu" | "checkbox";

type GetElement<T> = 
  T extends "input" ? Input :
  T extends "button" ? Button :
  T extends "selectmenu" ? SelectMenu :
  T extends "checkbox" ? Checkbox :
  never

interface Data<T extends ElementType> {
  type: T;
  execute(element: GetElement<T>): void;
}

function createData<T extends ElementType>(data: Data<T>) {

}

createData({
  type: "checkbox",
  execute(element) {

  }
})

type IsString<T> = T extends string ? true : false;
type IsNumber<T> = T extends number ? true : false;

interface StringOptions {
  upper(): void;
  lower(): void;
}

interface NumberOptions {
  pow(exp: number): number;
  sub(b: number): number;
  sum(b: number): number;
}

type ManipuleOptions<T> =
  IsString<T> extends true ? StringOptions :
  IsNumber<T> extends true ? NumberOptions :
  never
  
function manipule<T>(value: T): ManipuleOptions<T> {
  return Object.create({})
}

manipule("Jorge")