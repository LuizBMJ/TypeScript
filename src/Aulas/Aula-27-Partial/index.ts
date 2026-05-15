
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

type PartialUser = Partial<User>;

const user: PartialUser = {

}

interface Player {
    nick: string;
    health: number;
    shield: number;
    inventory: string[];
}

type CustomPlayer = Partial<Omit<Player, "nick">> & Pick<Player, "nick">;

const player: CustomPlayer = {
    nick: "iawd"
}