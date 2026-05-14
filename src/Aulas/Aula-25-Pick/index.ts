

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}


type UserPreview = Pick<User, "name" | "email">;

const userPreview: UserPreview = {
    name: "Jorge",
    email: "jorge@example.com",
};

type UserId = Pick<User, "id">;

const userId: UserId = {
    id: 1
};

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

type ContactForm = Pick<FormData, "fullName" | "email">;

const contact: ContactForm = {
    fullName: "Jorge",
    email: "jorge@example.com"
};