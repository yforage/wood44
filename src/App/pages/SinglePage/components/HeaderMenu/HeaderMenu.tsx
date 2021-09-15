import { MenuOutlined } from "@ant-design/icons";
import { HashLink } from "react-router-hash-link";

import { useLangContext } from "../..";
import LangSwitch from "../LangSwitch";

import "./HeaderMenu.css";

type HeaderMenuProps = {
  toggleDrawer: () => void;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ toggleDrawer }) => {
  const langContext = useLangContext();
  return (
    <div className="header__menu">
      <div className="logo">
        <HashLink smooth to="/wood44/#">
          <div className="logo_link title_bold">
            <span>WOOD44.ru</span>
          </div>
        </HashLink>
      </div>
      <div className="header__menu-button">
        <div className="header__lang-switcher">
          <LangSwitch onChange={langContext.changeLang} />
        </div>
        <div className="header__menu-icon">
          <MenuOutlined onClick={toggleDrawer} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
