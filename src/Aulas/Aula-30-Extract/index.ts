
type Primitive = string | number | boolean | string[] | number[];

type MyType = Extract<Primitive, { length: number}>

interface User {
    name: string;
    age: number;
}

interface Player {
    nickname: string;
    health: number;
}

interface Member {
    nickname: string;
    username: string;
}

type Elements = User | Player | Member;

type MyType2 = Extract<Elements, { name: string}>
type MyType3 = Extract<Elements, { nickname: string}>