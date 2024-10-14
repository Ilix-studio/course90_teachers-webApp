import "./layoutStyles.css";
import { IconMenu } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";
const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container container'>
          <div className='header__toggle' id='header-toggle'>
            <IconMenu stroke={2} />
          </div>
          <IconLogout stroke={2} />
        </div>
      </header>
    </>
  );
};

export default Header;
