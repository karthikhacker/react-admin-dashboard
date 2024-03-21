import { FcBiohazard } from "react-icons/fc";
import { bottom_link_data, navData } from "../constants/Navbar";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
            <div className="flex items-center gap-2 px-1 py-2">
                <FcBiohazard fontSize={24} />
                <span>ADMIN</span>
            </div>
            <div className="flex-1 mt-4">
                {navData.map(item => (
                    <div key={item.name} className="flex-1 flex flex-col py-1">
                        <Link to={item.path} className={`${pathname === item.path ? "flex items-center gap-2 text-white font-light bg-neutral-700 hover:bg-neutral-700 px-3 py-2" : "flex items-center gap-2 text-neutral-200 font-light hover:bg-neutral-700 px-3 py-2"}`}>
                            {item.icon}
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="border-t border-neutral-700">
                {bottom_link_data.map(item => (
                    <div key={item.name}>
                        <Link to={item.path} className={`${pathname === item.path ? "flex items-center gap-2 text-white font-light bg-neutral-700 hover:bg-neutral-700 px-3 py-2" : "flex items-center gap-2 text-neutral-200 font-light hover:bg-neutral-700 px-3 py-2"}`}>
                            {item.icon}
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar