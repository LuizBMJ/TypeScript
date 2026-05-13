

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const items = [
  "Rincko", "Juliano", "Cristiano",
  30, 31, 12, 29, 35,
  true, false, false, true, true
]

const item = getFirstElement(items)


function isEqual<T>(a: T, b: T): boolean {
  return a === b;
}

isEqual(10, 10)

isEqual("10", "10")


interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

interface User {
  id: string;
  name: string;
  role: string;
}

function fetchUser(): ApiResponse<User> {
  return {
    success: true,
    data: { id: "123", name: "Jorge", role: "Dev"}
  }
}

interface Book {
  id: string;
  title: string;
}

function fetchBook(): ApiResponse<Book> {
  return {
    success: true,
    data: { id: "abc", title: "JOOOO"}
  }
}