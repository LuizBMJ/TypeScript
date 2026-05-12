
interface Animal {
  name: string;
  age: number;
  follow(): void;
}

interface Human {
  name: string;
  age: number;
  pets?: Animal[];
}

interface Post {
  title: string;
  author: Human;
}

function handle(value: Animal | Human | Post) {
  if ("name" in value && "follow" in value) {
    value;
    return;
  }

  if ("title" in value) {
    value;
    return;
  }

  value.age
}
