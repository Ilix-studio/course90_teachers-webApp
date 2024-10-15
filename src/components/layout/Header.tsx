import "./layoutStyles.css";
import { IconMenu } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";

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
          <IconLogout stroke={2} />
        </div>
      </header>
    </>
  );
};

export default Header;
