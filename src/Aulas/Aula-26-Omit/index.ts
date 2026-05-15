
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

type BasicUserInfo = Omit<User, "id" | "name">;

const user: BasicUserInfo = {
    email: "aiwdj0awjd@gmail.com",
    isAdmin: false
}

type DateProps = "getHours" | "getMinutes" | "getDay"
type DateTime = Omit<Date, DateProps>;

function main(date: DateTime){

}

interface Player {
    nick: string;
    health: number;
    shield: number;
    inventory: string[];
}

const player: Player = {
    nick: "jorgez",
    health: 23,
    shield: 123,
    inventory: ["shield"],
}

function execute<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>{
    return Object.create({})
}

const NewPlayer = execute(player, ["shield"])