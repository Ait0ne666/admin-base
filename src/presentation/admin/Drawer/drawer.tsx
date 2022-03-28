import { matchPath, NavLink, resolvePath, useLocation, useMatch, useNavigate, useResolvedPath, useRoutes } from "react-router-dom";
import { AdminPaneLProps, AdminRoute } from "../admin";
import { ReactComponent as LogoutSVG } from '../assets/logout.svg'



const Drawer: React.FC<AdminPaneLProps & { isOpen: boolean }> = ({
    isOpen,
    onLogout,
    routes,
    user,
    routeBase
}) => {

    const location = useLocation()





    return (
        <div className={`flex flex-col h-screen fixed pb-5 top-0 left-0  z-10 bg-[#f7f7f7] shadow-lg desktop:shadow-none desktop:bg-black w-drawer ${isOpen ? 'translate-x-0' : '-translate-x-drawer'} duration-500`}>
            <div className="h-header  flex items-center justify-center desktop:justify-start desktop:pl-5 min-w-drawer">
                <img src='/logo.svg' alt='logo' className="h-10" />
            </div>
            <div className="flex-1 flex flex-col py-5 desktop:py-10">
                {
                    routes.map((route) => {


                        return (
                            <CustomLink route={route} key={route.name} base={routeBase} />
                        )

                    })
                }
            </div>
            <div className="flex desktop:hidden lfex-row px-5 font-semibold text-base cursor-pointer" onClick={onLogout}>
                Выход
                <LogoutSVG className="ml-1" />
            </div>
        </div>
    )
}



const CustomLink = ({ route, base }: { route: AdminRoute, base: string }) => {
    const { pathname } = useLocation()
    const path = pathname.endsWith('/') ? pathname.slice(0, pathname.length - 1) : pathname

    const active = path.endsWith(base + (route.route === '' ? '' : '/' + route.route))
    const navigate = useNavigate()





    const onNavigate = (route: string) => {
        navigate(base + '/' + route)
    }

    return (

        <div key={route.name} onClick={() => onNavigate(route.route)} className={`w-full cursor-pointer py-2 px-5 text-lg font-normal  ${active ? 'bg-action text-white' : 'text-primary-text hover:bg-action hover:text-white'} `}>
            {route.label}
        </div>

    )




}



export default Drawer