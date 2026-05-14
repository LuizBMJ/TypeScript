class Person {
    age;
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
class Employee extends Person {
    name;
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.getAge()} anos.`);
    }
}
class CEO extends Employee {
    constructor(name, age) {
        super(name, age);
    }
    invest() {
        console.log(`${this.name} está investindo na empresa.`);
    }
}
const employee = new Employee("João", 30);
employee.introduce();
const ceo = new CEO("Maria", 40);
ceo.introduce();
ceo.invest();
export {};
