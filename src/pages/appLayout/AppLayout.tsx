import { Outlet } from "react-router-dom";
import * as React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

// Layout of the whole app
const AppLayout = () => {
  return (
    <>
      <div className="flex">
        <Topbar />
        <Sidebar />
        <div className="w-screen h-screen p-14 pt-36 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
