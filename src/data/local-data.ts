import { IUser } from "../models/user/user"
import { APP_NAME } from "../utils/constants"






export const saveJwt = (jwt: string) => {
    localStorage.setItem(APP_NAME + '-admin-token', jwt)
}

export const getJwt = () => {
    return localStorage.getItem(APP_NAME + '-admin-token')
}

export const clearJwt = () => {
    localStorage.removeItem(APP_NAME + '-admin-token')
}



export const saveUser = (user: IUser) => {
    const jsonString = JSON.stringify(user)


    localStorage.setItem(APP_NAME  + 'adminUser', jsonString)
}



export const getUser = () => {
    const jsonString = localStorage.getItem(APP_NAME  + 'adminUser')
    console.log('admin', jsonString)
    if (jsonString) {
        const user: IUser = JSON.parse(jsonString)
        return user
    }

    return undefined
}


export const deleteUser = () => {
    localStorage.removeItem(APP_NAME  + 'adminUser')
}