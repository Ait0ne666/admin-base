import { useUser } from "../../../data/queries/user";
import {Navigate, useNavigate} from 'react-router-dom'
import Admin from "../../admin/admin";
import { useMutation, useQueryClient } from "react-query";
import { clearJwt, deleteUser } from "../../../data/local-data";
import StatsPage from "./stats/stats";



const AppPage = () => {

    const { data: user, isError, } = useUser();
    const loggedIn = user && !isError
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const logoutMutation = useMutation("user", logout, {
      onSuccess: () => {
        navigate('/', {
            replace: true
        })
        queryClient.invalidateQueries("user");
      },
    });

    if (!loggedIn) {
        return <Navigate to="/"  replace />
    }


    const onLogout = () => {
        logoutMutation.mutate()
    }



    

    return (
        <Admin onLogout={onLogout} user={user} routeBase='/app' routes={[
            {
                element: <StatsPage/>,
                label: 'Статистика',
                name: 'stats',
                route: ''
            },

        ]}/>
    )
}

const logout = async () => {
    clearJwt()
    deleteUser()
}



export default AppPage