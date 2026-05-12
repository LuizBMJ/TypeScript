

interface Drivable {
    startEngine(): void;
    drive(): void;
}

class Car implements Drivable {
    startEngine(): void {
        console.log("O motor do carro foi ligado.");
    }

    drive(): void {
        console.log("O carro está dirigindo.");
    }
}