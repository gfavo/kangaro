export type user = {
    name: string;
    email: string;
    role: 'master' | 'admin' | 'teacher';
    organizationName: string;
}