
function logLength<T extends {length: number} >(item: T){
  console.log(item.length)
}

const numbers = [1, 2, 3];
const myobj = { length: 20};
const myname = "Jorge";

const my = new Set<number>();

myname.length