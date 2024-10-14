import "./layoutStyles.css";
import { Link } from "react-router-dom";
import { IconLogout } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconHome2 } from "@tabler/icons-react";
import { IconCheckupList } from "@tabler/icons-react";
import { IconPencilQuestion } from "@tabler/icons-react";
import { IconUserCheck } from "@tabler/icons-react";
import { IconPaywall } from "@tabler/icons-react";
import { IconBellPlus } from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar' id='sidebar'>
        <nav className='sidebar__container'>
          <div className='sidebar__logo'>
            <img
              src='assets/img/yt-logo.svg'
              alt=''
              className='sidebar__logo-img'
            />
            <img
              src='assets/img/yt-logo-text.svg'
              alt=''
              className='sidebar__logo-text'
            />
          </div>
          <div className='sidebar__content'>
            <div className='sidebar__list'>
              <Link to='/' className='sidebar__link active-link'>
                <IconHome2 stroke={2} />
                <span className='sidebar__link-name'>Dashboard</span>
              </Link>
              <Link to='/create-question' className='sidebar__link'>
                <IconPencilQuestion stroke={2} />
                <span className='sidebar__link-name'>Create Question</span>
              </Link>
              <Link to='/questions-deck' className='sidebar__link'>
                <IconCheckupList stroke={2} />
                <span className='sidebar__link-name'>Questions Deck</span>
              </Link>
              <Link to='/profile' className='sidebar__link'>
                <IconUserCircle stroke={2} />
                <span className='sidebar__link-name'>Profile</span>
              </Link>
            </div>
            <h3 className='sidebar__title'>
              <span>Transactions</span>
            </h3>
            <div className='sidebar__list'>
              <Link to='/mywallet' className='sidebar__link'>
                <IconPaywall stroke={2} />
                <span className='sidebar__link-name'>My Wallet</span>
              </Link>
            </div>
            <h3 className='sidebar__title'>
              <span>General</span>
            </h3>
            <div className='sidebar__list'>
              <Link to='/notifications' className='sidebar__link'>
                <IconBellPlus stroke={2} />
                <span className='sidebar__link-name'>Notifications</span>
              </Link>

              <Link to='/logout' className='sidebar__link'>
                <IconLogout stroke={2} />
                <span className='sidebar__link-name'>Logout</span>
              </Link>
            </div>
          </div>
          <div className='sidebar__account'>
            <IconUserCheck stroke={2} />
            <div className='sidebar__names'>
              <h3 className='sidebar__name'>Ilix</h3>
              <span className='sidebar__email'>ilixhazarika@email.com</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
