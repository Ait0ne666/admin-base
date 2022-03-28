import { useMutation, useQuery } from "react-query"
import { IUser } from "../../models/user/user"
import { getProfile } from "../api/user"
import { getUser } from "../local-data"

export const useUser = () => {
    return useQuery<IUser, Error>('user', getProfile, {
        staleTime: 3600 * 1000,
        retry: 0,
        refetchOnWindowFocus: false,
        initialData: getUser(),
        initialDataUpdatedAt: new Date(2020, 11, 1).getTime()
    })
}


