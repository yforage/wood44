import { Drawer } from "antd";
import { HashLink } from "react-router-hash-link";

import { useLangContext } from "../..";
import "./DrawerMenu.css";

type DrawerMenuProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

type drawerTextType = {
  subtitle: string;
  about: string;
  products: string;
  gallery: string;
  contacts: string;
  certificates: string;
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, toggleDrawer }) => {
  const langContext = useLangContext();
  const drawerText: Record<string, drawerTextType> = {
    en: {
      subtitle: "PEELED BIRCH VENEER PRODUCER",
      about: "About",
      products: "Products",
      gallery: "Gallery",
      contacts: "Contacts",
      certificates: "Certificates",
    },
    ru: {
      subtitle: "МЫ ПРОИЗВОДИМ ЛУЩЕНЫЙ БЕРЕЗОВЫЙ ШПОН",
      about: "О нас",
      products: "Продукция",
      gallery: "Галерея",
      contacts: "Контакты",
      certificates: "Сертификаты",
    },
  };
  const { innerWidth: screenWidth } = window;
  return (
    <Drawer
      className="drawer__ant"
      placement="right"
      visible={isOpen}
      onClose={toggleDrawer}
      bodyStyle={{
        backgroundColor: "#465945",
        fontSize: "32px",
        padding: "40px",
        overflow: "hidden",
      }}
      width={screenWidth > 765 ? "50%" : "100%"}
    >
      <div className="drawer">
        <div className="drawer__header title_bold">
          <HashLink smooth to="/wood44/#" onClick={toggleDrawer}>
            <span className="logo_link">WOOD44.ru</span>
          </HashLink>
          <span className="logo_subtitle">
            {drawerText[langContext.lang].subtitle}
          </span>
        </div>
        <div className="drawer__body">
          <HashLink smooth to="/wood44/#about" onClick={toggleDrawer}>
            <div className="drawer__item">
              <span className="drawer__link">
                {drawerText[langContext.lang].about}
              </span>
            </div>
          </HashLink>
          <HashLink smooth to="/wood44/#products" onClick={toggleDrawer}>
            <div className="drawer__item">
              <span className="drawer__link">
                {drawerText[langContext.lang].products}
              </span>
            </div>
          </HashLink>
          <HashLink smooth to="/wood44/#gallery" onClick={toggleDrawer}>
            <div className="drawer__item">
              <span className="drawer__link">
                {drawerText[langContext.lang].gallery}
              </span>
            </div>
          </HashLink>
          <HashLink smooth to="/wood44/#contacts" onClick={toggleDrawer}>
            <div className="drawer__item">
              <span className="drawer__link">
                {drawerText[langContext.lang].contacts}
              </span>
            </div>
          </HashLink>
          <HashLink smooth to="/wood44/#certificates" onClick={toggleDrawer}>
            <div className="drawer__item">
              <span className="drawer__link">
                {drawerText[langContext.lang].certificates}
              </span>
            </div>
          </HashLink>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
