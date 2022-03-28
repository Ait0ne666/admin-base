import moment from "moment";
import { AdminPaneLProps } from "../admin";

import { ReactComponent as LogoutSVG } from '../assets/logout.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'



const Header: React.FC<AdminPaneLProps & { isDrawerOpen: boolean, toggleDrawer: () => void }> = ({
    onLogout,
    routes,
    user,
    isDrawerOpen,
    toggleDrawer
}) => {

    return (
        <header className={`w-full fixed top-0 left-0     ${isDrawerOpen ? 'desktop:pl-drawer' : 'desktop:pl-0'} duration-500`}>
            <div className="w-full bg-black flex justify-between items-center pr-2 desktop:pr-10 h-header text-primary-text">
                <div className="flex items-center ml-2">
                    {
                        isDrawerOpen ?
                            <GiHamburgerMenu className="cursor-pointer" onClick={toggleDrawer} />
                            :
                            <GiHamburgerMenu className="cursor-pointer" onClick={toggleDrawer} />
                    }
                    <div className="hidden desktop:flex font-semibold text-base  flex-row ml-3">
                        {user?.name}
                    </div>
                </div>
                <div className="hidden desktop:flex flex-row font-semibold text-base ">
                    {moment().format("DD.MM.yyyy")}
                    <div className="flex lfex-row ml-10 font-semibold text-base cursor-pointer" onClick={onLogout}>
                        Выход
                        <LogoutSVG className="ml-1" />
                    </div>
                </div>
                <div className="flex desktop:hidden font-semibold text-base  flex-row ml-3">
                        {user?.name}
                    </div>

            </div>
        </header>
    );
};


export default Header;
