import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./layoutStyles.css";

const Layout = () => {
  return (
    <>
      <div className='layout'>
        <Header />
        <div className='layout-content'>
          <Sidebar />
          <main className='main container'>
            <Outlet /> {/* This renders the matched child route's component */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
