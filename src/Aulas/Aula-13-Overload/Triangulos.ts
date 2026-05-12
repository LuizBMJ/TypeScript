
interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;
}

interface EquilateralTriangle extends Triangle {
  type: "equilateral";
}

interface IsoscelesTriangle extends Triangle {
  type: "isosceles";
}

interface ScaleneTriangle extends Triangle {
  type: "scalene";
}

type Triangles = EquilateralTriangle | IsoscelesTriangle | ScaleneTriangle;

function createTriangle(sides: number): EquilateralTriangle;
function createTriangle(sideA: number, sideBC: number): IsoscelesTriangle;
function createTriangle(sideA: number, sideB: number, sideC: number): ScaleneTriangle;
function createTriangle(arg1: number, arg2?: number, arg3?: number): Triangles {
  if (arg1 && arg3) {
    return { type: "scalene", sideA: arg1, sideB: arg2, sideC: arg3 } as ScaleneTriangle;
  }

  if (arg1 && !arg3) {
    return { type: "isosceles", sideA: arg1, sideB: arg2, sideC: arg2 } as IsoscelesTriangle;
  }
  return { type: "equilateral", sideA: arg1, sideB: arg1, sideC: arg1 } as EquilateralTriangle;
}

const equilateral = createTriangle(5);
console.log(equilateral.type); // equilateral
console.log(equilateral.sideA); // 5

const isosceles = createTriangle(5, 3);
console.log(isosceles.type); // isosceles
console.log(isosceles.sideA); // 5
console.log(isosceles.sideB); // 3

const scalene = createTriangle(3, 4, 5);
console.log(scalene.type); // scalene
console.log(scalene.sideA); // 3
console.log(scalene.sideB); // 4
console.log(scalene.sideC); // 5


