

type Args = string | number | boolean;
function bootstrap(dirname: string, args?: Args[]): boolean {
  
  return true
}

type MainFunction = (args: string[]) => void; 

const main: MainFunction = (args) => {
  console.log("Argumentos recebidos:", args);
}

interface Function {
  run(context: any): void,
  execute(): boolean,
  handle(request: Request, response: Response): void
}

const funcs: Function = {
  execute() {
    return true;
  },

  run(context) {
    console.log("Running with context:", context);
  },

  handle(request, response) {
    
  },
}

function oldcustomLog(text: string, color: string = "black", time?: Date, author?: string): void {
  console.log(color, text);
  if (time) console.log("Logged at:", time.toString());
  if (author) console.log("Author:", author);
}

oldcustomLog("Hello, TypeScript!", "blue", new Date(), "John Doe");

interface CustomLogOptions {
  color?: string;
  time?: Date;
  author?: string;
}

function customLog(text: string, options: CustomLogOptions = {}): void {  
  const {color="black", time, author} = options;
  console.log(color, text);
  if (time) console.log("Logged at:", time.toString());
  if (author) console.log("Author:", author);
}

customLog("Hello, TypeScript!", { color: "blue", time: new Date(), author: "John Doe" });