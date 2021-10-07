import { createContext, useContext, useState } from "react";
import React from "react";

import "./SinglePage.scss";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import Certificates from "../../../components/Certificates";
import Contacts from "../../../components/Contacts";
import DrawerMenu from "../../../components/DrawerMenu";
import FooterInfo from "../../../components/FooterInfo";
import Gallery from "../../../components/Gallery";
import HeaderMenu from "../../../components/HeaderMenu";
import MainPage from "../../../components/MainPage";
import OurPromise from "../../../components/OurPromise";
import Products from "../../../components/Products";
import background from "./bg.jpg";

type LangContextProps = {
  lang: string;
  changeLang: () => void;
};

const LangContext = createContext<LangContextProps>({
  lang: "en",
  changeLang: () => {},
});

const Provider = LangContext.Provider;

const useLangContext = () => useContext(LangContext);

const SinglePage: React.FC = () => {
  const { Header, Content, Footer } = Layout;

  const [isOpen, setDrawerState] = useState<boolean>(false);
  const toggleDrawer = () => setDrawerState((prev) => (prev ? false : true));

  const [currentLang, setCurrentLang] = useState<string>("en");
  const changeLang = () =>
    setCurrentLang((prev) => (prev === "en" ? "ru" : "en"));
  return (
    <Provider
      value={{
        lang: currentLang,
        changeLang: changeLang,
      }}
    >
      <BrowserRouter>
        <Layout className="git-repo-layout">
          <Header className="header">
            <HeaderMenu toggleDrawer={toggleDrawer} />
          </Header>
          <Content
            className="content"
            style={{
              background: `linear-gradient(rgba(128,128,128,.65),rgba(128,128,128,.65)),url(${background})`,
              backgroundPosition: `center`,
              backgroundAttachment: `fixed`,
              backgroundSize: `cover`,
            }}
          >
            <MainPage />
            <OurPromise />
            <Products />
            <Gallery />
            <Contacts />
            <Certificates />
          </Content>
          <Footer style={{ backgroundColor: "#465945" }}>
            <FooterInfo />
          </Footer>
          <DrawerMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export { SinglePage, useLangContext };
