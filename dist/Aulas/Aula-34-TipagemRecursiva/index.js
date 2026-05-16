const flat = 1;
const nested = [1, [2, 3], [[4, 5]]];
const jsonData = {
    name: "test",
    values: [1, 2, { nested: true }]
};
const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4, children: [] }] }
    ]
};
const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};
export {};
