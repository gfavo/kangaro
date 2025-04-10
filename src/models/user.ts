export type User = {
    id?: number;
    name: string;
    email: string;
    role?: 'master' | 'admin' | 'teacher';
    organizationName?: string;
}