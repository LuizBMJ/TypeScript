
interface User {
    id?: number;
    name?: string;
    email?: string;
    isAdmin?: boolean;
}

type RequiredUser = Required<User>;

const user: RequiredUser = {
    email: "awdawd",
    id: 123,
    isAdmin: false,
    name: "awdawd"
}

interface Player {
    nick: string;
    health: number;
    shield?: number;
    inventory?: string[];
}

const player: Required<Player> = {
    nick: "adwawd" ,
    health: 123,
    shield: 123,
    inventory: ["awdawd"]
}


type MyFetchOptions =
    Required<Pick<RequestInit, "body" | "method">>
    & Omit<RequestInit, "body" | "method">

function myFetch(url: string, options?:  MyFetchOptions) {

}


myFetch("https://localhost:8080/auth", {
    body: "123",
    method: "123"
})