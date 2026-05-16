
type MaybeName = number | string | null | undefined;

type Name = NonNullable<MaybeName>

interface User {
    id: number | null;
    name: string | undefined;
}

interface NonNullableUser {
    id: NonNullable<User["id"]>;
    name: NonNullable<User["name"]>;
}


interface Member {
    id: string;
    name: string;
    posts?: {
        title: string;
        content: string;
        tags?: {
            name: string;
            icon?: string;
        }[],
        createdAt: Date;
    }[]
}

type Post = NonNullable<Member["posts"]>[number]