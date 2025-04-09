export type User = {
    name: string;
    email: string;
    role?: 'master' | 'admin' | 'teacher';
    organizationName?: string;
}