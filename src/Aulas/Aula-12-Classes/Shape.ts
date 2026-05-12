

abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;

    describe(): void {
        console.log(`Área: ${this.area()}, Perímetro: ${this.perimeter()}`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    describe(): void {
        console.log(`Círculo com raio ${this.radius}`);
        super.describe();
    }
}

const circle = new Circle(5);
circle.area(); // 78.53981633974483
circle.perimeter(); // 31.41592653589793
circle.describe(); // Círculo com raio 5
                    // Área: 78.53981633974483, Perímetro: 31.41592653589793