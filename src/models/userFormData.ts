export interface UserFormData {
    name?: string;
    email: string;
    password: string;
    organizationName?: string;
    role?: "master" | "admin" | "teacher"
}