type NestedNumbers = number | NestedNumbers[];

const flat: number = 1;
const nested: NestedNumbers = [1, [2, 3], [[4, 5]]];

type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };

const jsonData: JSONValue = {
    name: "test",
    values: [1, 2, { nested: true }]
};

interface TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
}

const tree: TreeNode<number> = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4, children: [] }] }
    ]
};

type LinkedList<T> = {
    value: T;
    next: LinkedList<T> | null;
};

const list: LinkedList<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface DeepNested {
    user: {
        name: string;
        address: {
            city: string;
            country: string;
        }
    };
}

type ReadonlyNested = DeepReadonly<DeepNested>;

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type PartialNested = DeepPartial<DeepNested>;

type Flatten<T> = T extends any[] ? T[number] : T;

type FlattenResult = Flatten<string[][]>;

type DeepFlatten<T> = T extends any[] ? Flatten<T> extends infer U ? U extends any[] ? DeepFlatten<U> : U : never : T;

type DeepFlattenResult = DeepFlatten<number[][][]>;

type DeepRequired<T> = {
    [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};

interface OptionalNested {
    a?: { b?: { c?: string } };
}

type RequiredNested = DeepRequired<OptionalNested>;