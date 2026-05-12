

interface Person {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    breed: string;
}

interface House {
    address: string;
    size: number;
}

function generate(type: "person"): Person; 
function generate(type: "dog"): Dog; 
function generate(type: "house"): House; 
function generate(type: "person" | "dog" | "house"){
  switch(type) {
    case "person":
      return { name: "Alice", age: 30 };
    case "dog":
      return { name: "Rex", breed: "Labrador" };
    case "house":
      return { address: "123 Main St", size: 120 };
  }
}

const person = generate("person");
console.log(person.name); // Alice
console.log(person.age); // 30