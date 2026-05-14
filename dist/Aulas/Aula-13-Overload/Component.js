var InputType;
(function (InputType) {
    InputType[InputType["String"] = 0] = "String";
    InputType[InputType["Number"] = 1] = "Number";
    InputType[InputType["Date"] = 2] = "Date";
    InputType[InputType["Email"] = 3] = "Email";
    InputType[InputType["Password"] = 4] = "Password";
})(InputType || (InputType = {}));
function buildComponent(id, label, arg) {
    if (typeof arg === "string") {
        return { id, label, style: arg };
    }
    else if (Array.isArray(arg)) {
        return { id, label, options: arg };
    }
    else {
        return { id, label, type: arg };
    }
}
const button = buildComponent("btn1", "Submit", "primary");
console.log(button.style);
const selectMenu = buildComponent("sel1", "Country", ["USA", "Canada", "Mexico"]);
console.log(selectMenu.options);
const input = buildComponent("inp1", "Age", InputType.Number);
console.log(input.type);
export {};
