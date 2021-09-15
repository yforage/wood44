import "./MainPage.css";
import { Col, Row } from "antd";
import { HashLink } from "react-router-hash-link";

import { useLangContext } from "../..";
import intro from "./intro.jpg";

type mainPageTextType = {
  title: string;
  tagline: string;
  description: string;
  link: string;
};

const MainPage = () => {
  const langContext = useLangContext();
  const mainPageText: Record<string, mainPageTextType> = {
    en: {
      title: "PEELED BIRCH VENEER",
      tagline: "USE IT FOR YOUR PRODUCT",
      description:
        "We are producing peeled birch veneer from local forests of Kostroma. Try to use it, put the Russian soul into your products!",
      link: "Visit us today!",
    },
    ru: {
      title: "ЛУЩЕНЫЙ БЕРЕЗОВЫЙ ШПОН",
      tagline: "ОСНОВА ВАШИХ ИЗДЕЛИЙ",
      description:
        "Мы производим лущеный шпон из березы, произрастающей на Костромской земле. Попробуйте использовать нашу продукцию в своем производстве - вдохните русскую душу в ваши изделия!",
      link: "Приглашаем Вас!",
    },
  };

  return (
    <Row justify="center">
      <Col xs={20} md={18} lg={16} xxl={12}>
        <div className="main__1">
          <div className="main_1__info">
            <p className="main_1__info_product-name title_bold">
              {mainPageText[langContext.lang].title}
            </p>
            <p className="main_1__info_tagline title_thin">
              {mainPageText[langContext.lang].tagline}
            </p>
            <p className="main_1__info_description">
              {mainPageText[langContext.lang].description}
            </p>
            <HashLink smooth to="/wood44/#contacts">
              <div className="main_1__info_link">
                <span>{mainPageText[langContext.lang].link}</span>
              </div>
            </HashLink>
          </div>
          <div className="main_1__image">
            <img className="main_1__img" src={intro} alt="" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainPage;
