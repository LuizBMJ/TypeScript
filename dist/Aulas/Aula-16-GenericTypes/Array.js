class MyCustomArray {
    items = [];
    add(item) {
        this.items.unshift(item);
    }
    remove() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const myCustomStringArr = new MyCustomArray();
myCustomStringArr.add("jorge");
const removed = myCustomStringArr.remove();
const myCustomNumberArr = new MyCustomArray();
myCustomNumberArr.add(13);
const players = new MyCustomArray();
players.add({ name: "Rincko", health: 20, shield: 5, isDead: false });
const removedPlayer = players.remove();
export {};
