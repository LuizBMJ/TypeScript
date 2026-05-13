
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