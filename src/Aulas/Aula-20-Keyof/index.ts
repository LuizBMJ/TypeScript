// Keyof operator to create union types from object keys

interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;
const key: UserKeys = "name";
console.log(key);

// Using keyof in function
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Jorge", email: "jorge@example.com" };
const name = getProperty(user, "name");
console.log(name);

// Keyof with type alias
type Settings = {
  theme: "light" | "dark";
  language: string;
  notifications: boolean;
};

type SettingKey = keyof Settings;
const setting: SettingKey = "theme";
console.log(setting);

// Keyof in mapped types
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = { id: 1, name: "Jorge", email: "test@example.com" };
console.log(readonlyUser);

// Keyof for creating update types
type Partial<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = Partial<User>;
const updateUser: PartialUser = { name: "Maria" };
console.log(updateUser);

// Keyof with index signature
type Dictionary = {
  [key: string]: number;
};

type DictKey = keyof Dictionary;
const dictKey: DictKey = "anyKey";
console.log(dictKey);

// Practical example: update function
function updateUserProperty<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return { ...obj, [key]: value };
}

const updated = updateUserProperty(user, "name", "Carlos");
console.log(updated);