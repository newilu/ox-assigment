export interface IUser {
    id: number;
    username: string;
    password: string;
}

const users: IUser[] = [
    { id: 1, username: 'admin', password: 'password' }
];

export default users;