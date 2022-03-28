import { AdminUser } from "../../presentation/admin/models/user";


export interface IUser extends AdminUser {
    id: string,
    name: string,
    email: string
}