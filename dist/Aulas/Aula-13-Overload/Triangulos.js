function createTriangle(arg1, arg2, arg3) {
    if (arg1 && arg3) {
        return { type: "scalene", sideA: arg1, sideB: arg2, sideC: arg3 };
    }
    if (arg1 && !arg3) {
        return { type: "isosceles", sideA: arg1, sideB: arg2, sideC: arg2 };
    }
    return { type: "equilateral", sideA: arg1, sideB: arg1, sideC: arg1 };
}
const equilateral = createTriangle(5);
console.log(equilateral.type);
console.log(equilateral.sideA);
const isosceles = createTriangle(5, 3);
console.log(isosceles.type);
console.log(isosceles.sideA);
console.log(isosceles.sideB);
const scalene = createTriangle(3, 4, 5);
console.log(scalene.type);
console.log(scalene.sideA);
console.log(scalene.sideB);
console.log(scalene.sideC);
export {};
