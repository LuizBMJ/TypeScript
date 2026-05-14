function getFirstElement(arr) {
    return arr[0];
}
const items = [
    "Rincko", "Juliano", "Cristiano",
    30, 31, 12, 29, 35,
    true, false, false, true, true
];
const item = getFirstElement(items);
function isEqual(a, b) {
    return a === b;
}
isEqual(10, 10);
isEqual("10", "10");
function fetchUser() {
    return {
        success: true,
        data: { id: "123", name: "Jorge", role: "Dev" }
    };
}
function fetchBook() {
    return {
        success: true,
        data: { id: "abc", title: "JOOOO" }
    };
}
export {};
