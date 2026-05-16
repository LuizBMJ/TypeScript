type Flags = {
    option1: boolean;
    option2: boolean;
    option3: boolean;
};

type MappedFlags = {
    [K in keyof Flags]: string
};

type StringFlags = {
    [K in keyof Flags]: string
};

type Nullable<T> = {
    [K in keyof T]: T[K] | null
};

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type NullableUser = Nullable<User>;

type Readonly<T> = {
    readonly [K in keyof T]: T[K]
};

type ReadonlyUser = Readonly<User>;

type Optional<T> = {
    [K in keyof T]?: T[K]
};

type OptionalUser = Optional<User>;

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type HalfOptionalUser = MakeOptional<User, "name" | "email">;

type RemoveReadonly<T> = {
    -readonly [K in keyof T]: T[K]
};

type MutableUser = RemoveReadonly<ReadonlyUser>;

type RemoveOptional<T> = {
    [K in keyof T]-?: T[K]
};

type RequiredUser = RemoveOptional<OptionalUser>;

type PrefixKeys<T extends string, P extends string> = {
    [K in T as `${P}${K}`]: boolean
};

type PrefixedKeys = PrefixKeys<"id" | "name" | "email", "is">;

interface Config {
    dev: boolean;
    prod: boolean;
    staging: boolean;
}

type ToggleConfig<T> = {
    [K in keyof T]: boolean
};

type ConfigToggled = ToggleConfig<Config>;