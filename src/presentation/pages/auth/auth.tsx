import { useUser } from "../../../data/queries/user";
import Auth from "../../components/auth/auth"
import {Navigate} from 'react-router-dom'



const AuthPage = () => {
    const { data: user, isError } = useUser();
    const loggedIn = user && !isError


    if (loggedIn) {
        return <Navigate to="/app"  replace />
    }

    return (
        <div className="min-w-full min-h-screen flex justify-center items-center">
            <Auth/>
        </div>
    )
}



export default AuthPage