import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./layoutStyles.css";

const Layout = () => {
  // State to control sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible((prev: boolean) => !prev);
  };
  return (
    <>
      <div className='layout'>
        <Header toggleSidebar={toggleSidebar} />
        <div className='layout-content'>
          <Sidebar isVisible={isSidebarVisible} />
          <main className='main container'>
            <Outlet /> {/* This renders the matched child route's component */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
