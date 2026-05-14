

function throwError(message: string): never {
  throw new Error(message);
}

function main(){
  throwError("Ocorreu um erro");
  try {
    
  } catch(err){
    console.log("Algo saiu errado");
  }

  const name = "Rincko";
  console.log(name);

}
main();

function main02(x: string | number) {
  if (typeof x === "string" ) {
    
  }
  if (typeof x === "number" ) {

  }
}

main02({} as string)