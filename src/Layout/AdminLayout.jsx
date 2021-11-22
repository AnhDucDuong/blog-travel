import { Outlet } from "react-router";
import HeaderAdmin from "../Components/HeaderAdmin";
import SidebarAdmin from "../Components/SidebarAdmin";

function AdminLayout() {
    return (
        <div>
            <div>
                <div className="flex h-screen bg-gray-200">
                    <SidebarAdmin />

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <HeaderAdmin />

                        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default AdminLayout