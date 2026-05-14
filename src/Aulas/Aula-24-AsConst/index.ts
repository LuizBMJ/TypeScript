
const color = "red" as const;
type Color = typeof color; 

const user = {
    name: "Jorge",
    age: 30
} as const;

type User = typeof user;

const coords = [10, 20] as const;
type Coords = typeof coords; 


const routes = {
    home: "/",
    about: "/about",
    contact: "/contact"
} as const;

type Route = keyof typeof routes;
type RoutePath = typeof routes[Route];