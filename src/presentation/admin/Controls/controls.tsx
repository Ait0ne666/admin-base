import { AdminPaneLProps } from "../admin";
import Drawer from "../Drawer/drawer";
import Header from "../Header/header";

const Controls: React.FC<AdminPaneLProps & { isDrawerOpen: boolean, toggleDrawer: () => void }> = (props) => {




    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex select-none">
            <Drawer  {...props} isOpen={props.isDrawerOpen} />
            {
                props.isDrawerOpen &&
                <div className="desktop:hidden w-screen h-screen bg-[#00000055]" onClick={props.toggleDrawer}>
                </div>
            }
            <Header {...props} />
        </div>
    )
}



export default Controls