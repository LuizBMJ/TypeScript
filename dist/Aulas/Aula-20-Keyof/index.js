const key = "name";
console.log(key);
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: "Jorge", email: "jorge@example.com" };
const name = getProperty(user, "name");
console.log(name);
const setting = "theme";
console.log(setting);
const readonlyUser = { id: 1, name: "Jorge", email: "test@example.com" };
console.log(readonlyUser);
const updateUser = { name: "Maria" };
console.log(updateUser);
const dictKey = "anyKey";
console.log(dictKey);
function updateUserProperty(obj, key, value) {
    return { ...obj, [key]: value };
}
const updated = updateUserProperty(user, "name", "Carlos");
console.log(updated);
export {};
