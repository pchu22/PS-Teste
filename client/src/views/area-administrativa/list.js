import React, {useState} from "react";
import ListAreaAdminForm from "../../components/area-administrativa/areaAdministrativa";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

const ListAreaAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
      setSidebarOpen(true);
  };

  const closeSidebar = () => {
      setSidebarOpen(false);
  };

  return (
    <div className="container-sidebar">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <ListAreaAdminForm/>
    </div>
  );
};

export default ListAreaAdmin;
