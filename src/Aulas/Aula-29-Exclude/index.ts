
type Primitive = string | number | boolean;

type Value = Exclude<Primitive, boolean>

enum Colors {
    Red = "#FF0000",
    Orange = "#FFA500",

    Blue = "#0000FF",
    Green = "#008000"
}

type WarmColors = Exclude<Colors, Colors.Blue | Colors.Green>
type CooldColors = Exclude<Colors, WarmColors>

interface Message<T> { 
    type: T,
    content: string;
    color: T extends "warm" ? WarmColors : CooldColors
}

function createMessage<T extends "warm" | "cold">(options: Message<T>){

}

createMessage({
    type: "cold",
    content: "Hello World",
    color: Colors.Blue
})