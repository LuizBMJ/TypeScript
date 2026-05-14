

interface Component {
  id: string;
  label: string;
}

interface Button extends Component {
  style: string;
}

interface SelectMenu extends Component {
  options: string[];
}

enum InputType {
  String,
  Number,
  Date,
  Email,
  Password
}

interface Input extends Component {
  type: InputType;
}


function buildComponent(id: string, label: string, style: string): Button;
function buildComponent(id: string, label: string, options: string[]): SelectMenu;
function buildComponent(id: string, label: string, type: InputType): Input;
function buildComponent(id: string, label: string, arg: string | string[] | InputType) {
  if (typeof arg === "string") {
    return { id, label, style: arg } as Button;
  } else if (Array.isArray(arg)) {
    return { id, label, options: arg } as SelectMenu;
  } else {
    return { id, label, type: arg } as Input;
  }
}

const button = buildComponent("btn1", "Submit", "primary");
console.log(button.style);

const selectMenu = buildComponent("sel1", "Country", ["USA", "Canada", "Mexico"]);
console.log(selectMenu.options);

const input = buildComponent("inp1", "Age", InputType.Number);
console.log(input.type);