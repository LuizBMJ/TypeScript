type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
    return { id: 1, name: "John" };
}

type UserReturn = ReturnType<typeof getUser>;

function getNumbers() {
    return [1, 2, 3];
}

type NumbersReturn = ReturnType<typeof getNumbers>;

type PromiseResolve<T> = T extends Promise<infer R> ? R : T;

type ResolvedString = PromiseResolve<Promise<string>>;
type ResolvedArray = PromiseResolve<Promise<number[]>>;
type NotAPromise = PromiseResolve<string>;

type ArrayElement<T> = T extends (infer R)[] ? R : never;

type StringElement = ArrayElement<string[]>;
type NumberElement = ArrayElement<number[]>;
type ObjectElement = ArrayElement<{ id: number }[]>;

type Parameter<T> = T extends (...args: infer P) => any ? P : never;

type MyParams = Parameter<(a: string, b: number) => void>;
type AnotherParams = Parameter<(x: boolean, y: string, z: object) => number>;

type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : never;

class Animal {
    name: string;
}

type AnimalInstance = InstanceType<typeof Animal>;

type ConstructorParams<T> = T extends new (...args: infer P) => any ? P : never;

type AnimalConstructorParams = ConstructorParams<typeof Animal>;

interface Response<T> {
    data: T;
    status: number;
}

type ExtractData<T> = T extends Response<infer D> ? D : never;

type ExtractedData = ExtractData<Response<{ user: string }>>;

type ExtractStatus<T> = T extends Response<any> ? T["status"] : never;

type ExtractedStatus = ExtractStatus<Response<{ user: string }>>;