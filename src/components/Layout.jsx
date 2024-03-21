import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = () => {
    return (
        <div className="flex flex-row bg-neutral-100  w-screen h-[800px] mb-3">
            <Sidebar />
            <div className="w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout