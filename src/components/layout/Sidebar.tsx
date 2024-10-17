import "./layoutStyles.css";
import { Link } from "react-router-dom";
import {
  IconLogout,
  IconUserCircle,
  IconHome2,
  IconCheckupList,
  IconPencilQuestion,
  IconPaywall,
  IconBellPlus,
} from "@tabler/icons-react";
import { useState } from "react";

interface SidebarProps {
  isVisible: boolean; // Receive the visibility state from the parent component
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sidebarClass = isVisible ? "show-sidebar" : "";

  // Links for the sidebar
  const sidebarLinks = [
    { name: "Dashboard", path: "/", icon: <IconHome2 stroke={2} /> },
    {
      name: "Create Question",
      path: "/create-question",
      icon: <IconPencilQuestion stroke={2} />,
    },
    {
      name: "Questions Deck",
      path: "/questions-deck",
      icon: <IconCheckupList stroke={2} />,
    },
    { name: "Profile", path: "/profile", icon: <IconUserCircle stroke={2} /> },
  ];

  // Transaction and General sections
  const transactionLinks = [
    { name: "My Wallet", path: "/mywallet", icon: <IconPaywall stroke={2} /> },
  ];

  const generalLinks = [
    {
      name: "Notifications",
      path: "/notifications",
      icon: <IconBellPlus stroke={2} />,
    },
    { name: "Logout", path: "/logout", icon: <IconLogout stroke={2} /> },
  ];

  // Handle link click to set active state
  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`sidebar ${sidebarClass}`} id='sidebar'>
      <nav className='sidebar__container'>
        {/* Sidebar Logo */}

        {/* Sidebar Content */}
        <div className='sidebar__content'>
          {/* Main Links */}
          <div className='sidebar__list'>
            {sidebarLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className={`sidebar__link ${
                  activeIndex === index ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {link.icon}
                <span className='sidebar__link-name'>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Transactions Section */}
          <h3 className='sidebar__title'>
            <span>Transactions</span>
          </h3>
          <div className='sidebar__list'>
            {transactionLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index + sidebarLinks.length}
                className={`sidebar__link ${
                  activeIndex === index + sidebarLinks.length
                    ? "active-link"
                    : ""
                }`}
                onClick={() => handleLinkClick(index + sidebarLinks.length)}
              >
                {link.icon}
                <span className='sidebar__link-name'>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* General Section */}
          <h3 className='sidebar__title'>
            <span>General</span>
          </h3>
          <div className='sidebar__list'>
            {generalLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index + sidebarLinks.length + transactionLinks.length}
                className={`sidebar__link ${
                  activeIndex ===
                  index + sidebarLinks.length + transactionLinks.length
                    ? "active-link"
                    : ""
                }`}
                onClick={() =>
                  handleLinkClick(
                    index + sidebarLinks.length + transactionLinks.length
                  )
                }
              >
                {link.icon}
                <span className='sidebar__link-name'>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
