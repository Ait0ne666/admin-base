import { ReactElement, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Controls from "./Controls/controls";
import { AdminUser } from "./models/user";


export interface AdminRoute {
    label: string,
    name: string,
    route: string,
    element: ReactElement,
}



export interface AdminPaneLProps {
    user: AdminUser | undefined,
    onLogout: () => void,
    routes: AdminRoute[],
    routeBase:string,
}




export const Admin: React.FC<AdminPaneLProps> = ({
    onLogout,
    routes,
    user,
    routeBase
}) => {





    return (
        <Routes>
            {
                routes.map((route) => {
                    return (
                        <Route key={route.name} path={route.route ?? undefined} index={route.route === ''} element={<AdminLayout routeBase={routeBase} routes={routes} onLogout={onLogout} user={user} children={route.element} />} />
                    )
                })
            }
            <Route path='*' element={<AdminLayout routeBase={routeBase} routes={routes} onLogout={onLogout} user={user} children={<div>None</div>} />}/>
        </Routes>
    )
}



export const AdminLayout: React.FC<AdminPaneLProps> = ({
    children,
    onLogout,
    routes,
    user,
    routeBase
}) => {

    const [drawerOpen, setDrawerOpen] = useState(true)


    const toggleDrawer = () => {
        setDrawerOpen(c => !c)
    }



    return (
        <>
            <Controls
                onLogout={onLogout}
                routes={routes}
                user={user}
                routeBase={routeBase}
                toggleDrawer={toggleDrawer}
                isDrawerOpen={drawerOpen}
            />
            <div className={`w-full h-full mt-header duration-500 ${drawerOpen ? 'desktop:pl-drawer': 'desktop:pl-0'}`}>
                {children}
            </div>
        </>

    )
}




export default Admin