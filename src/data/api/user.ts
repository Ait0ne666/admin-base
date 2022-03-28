import axios from "axios";
import { API_URL } from "../../config";
import { IUser } from "../../models/user/user";
import { mapJsonToUser, tempUser } from "../adapters/user";
import { getJwt, getUser, saveJwt, saveUser } from "../local-data";



export const getProfile = async (): Promise<IUser> => {



    const user = getUser()



    if (!user) {
        Promise.reject()
    }



    return user!
    //   const token = getJwt();

    //   const url = API_URL + '/auth/profile'

    //   const response = await axios.get(url, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })


    //   const data = response.data


    //   return mapJsonToUser(data)

};

export const login = async (
    email: string,
    password: string
): Promise<string | IUser> => {


    saveUser(tempUser)


    return tempUser


    // const url = API_URL + '/admin/login'

    // const data = {
    //     email,
    //     password
    // }


    // try {
    //     const response = await axios.post(url, data)

    //     const jwt = response.data.token


    //     saveJwt(jwt)


    //     const user = await getProfile()

    //     saveUser(user)
    //     return user
    // } catch (err: any) {
    //     if (err.response.status === 400) {
    //         return 'Неверный логин или пароль'
    //     }
    //     return 'Ошибка авторизации'
    // }


};
