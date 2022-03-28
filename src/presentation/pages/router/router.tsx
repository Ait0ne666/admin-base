
import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '../../../data/queries/user';
import AppPage from '../app/app';
import AuthPage from '../auth/auth';


const Router = () => {





    return (
        <Routes>
            <Route path="/" element={<AuthPage />}>
                
            </Route>
            <Route path="/app/*" element={<AppPage />}>
                
            </Route>
        </Routes>
    );
};





export default Router