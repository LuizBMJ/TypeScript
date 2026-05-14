class Shape {
    describe() {
        console.log(`Área: ${this.area()}, Perímetro: ${this.perimeter()}`);
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    describe() {
        console.log(`Círculo com raio ${this.radius}`);
        super.describe();
    }
}
const circle = new Circle(5);
circle.area();
circle.perimeter();
circle.describe();
export {};
