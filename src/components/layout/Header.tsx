import "./layoutStyles.css";
import { IconMenu } from "@tabler/icons-react";
import logo from "../../assets/images/course90-logo.png";

interface HeaderProps {
  toggleSidebar: () => void; // Add this prop to trigger the sidebar toggle
}
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <>
      <header className='header'>
        <div className='header__container container'>
          <div
            className='header__toggle'
            id='header-toggle'
            onClick={toggleSidebar}
          >
            <IconMenu stroke={2} />
          </div>
          <img
            src={logo}
            alt='logo'
            style={{ height: "48px", width: "180px" }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
