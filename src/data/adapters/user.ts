import { IUser } from "../../models/user/user";


export const tempUser = {
    email: 'bonafide112358@gmail.com',
    id: 'asdas',
    name: 'Sergey Yukhanov'
}



export const mapJsonToUser = (json:any):IUser => {

    return tempUser
} 