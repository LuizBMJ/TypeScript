

type Settings = Record<string, string>;

const settings: Settings = {
  name: "jorge",
  type: "module",
}

type Offsets = Record<number, string>;

const offsets: Offsets = {
  123: "jorge",
  123123: "module",
}

interface Route {
  path: string;
  children?: Routes
}

type Routes = Record<string, Route>;

const routes: Routes = {
  home: {
    path: "/home"
  }
}

type Dictionary = Record<string, number | string | boolean>;

const dict: Dictionary = {
  id: 10,
  name: "Rincko",
  isProgrammer: true,
}

type Feature = "compileOnSave" | "autoSave" | "autoUpdate"

type Features = Record<Feature, boolean>

const config: Features = {
  autoSave: true,
  autoUpdate: false,
  compileOnSave: true
}