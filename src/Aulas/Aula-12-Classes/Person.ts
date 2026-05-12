

class Person {
    protected age: number;
    constructor(age: number) {
        this.age = age;
    }

    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    protected name: string;

    constructor(name: string, age: number) {
        super(age);
        this.name = name;
    }

    public introduce(): void {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.getAge()} anos.`);
    }
}

class CEO extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
    }

    invest(): void {
        console.log(`${this.name} está investindo na empresa.`);
    }
}

const employee = new Employee("João", 30);
employee.introduce(); // Olá, meu nome é João e tenho 30 anos.
const ceo = new CEO("Maria", 40);
ceo.introduce(); // Olá, meu nome é Maria e tenho 40 anos.
ceo.invest(); // Maria está investindo na empresa.