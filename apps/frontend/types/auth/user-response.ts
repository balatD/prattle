// User object returned by the Strapi Authentication API
type UserResponse = {
    jwt: string;
    id: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
}

export default UserResponse;