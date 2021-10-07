import "./Contacts.scss";
import React from "react";

import { EnvironmentOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

import { useLangContext } from "../../App/pages/SinglePage";

type contactsTextType = {
  title: string;
  subtitle: string;
  street: string;
  city: string;
  hint: string;
  common: string;
  phone: string;
  sales: string;
  salesEmail: string;
  paper: string;
  paperEmail: string;
};

const Contacts = () => {
  const openMap = () => {
    const url =
      "https://www.google.com/maps/search/?api=1&query=57.77217463533398%2C40.99049583433922&query_place_id=ChIJC2TMmXNPrUYRF0Xs2qwhv78";
    window.open(url, "_blank");
  };

  const langContext = useLangContext();
  const contactsText: Record<string, contactsTextType> = {
    en: {
      title: "COME ON IN",
      subtitle: "WE'RE OPEN",
      street: "26, Lokomotivnaya Str.",
      city: "Kostroma, RUSSIA",
      hint: "Call at working hours by MSK",
      common: "Common questions",
      phone: "+7 4942 44-06-75",
      sales: "Sales",
      salesEmail: "sales@wood44.ru",
      paper: "Paper works",
      paperEmail: "docs@wood44.ru",
    },
    ru: {
      title: "ПРИСОЕДИНЯЙТЕСЬ",
      subtitle: "МЫ ОТКРЫТЫ",
      street: "Локомотивная 26",
      city: "Кострома",
      hint: "Звоните в рабочее время",
      common: "Общие вопросы",
      phone: "+7 4942 44-06-75",
      sales: "Отдел продаж",
      salesEmail: "sales@wood44.ru",
      paper: "Оформление документов",
      paperEmail: "docs@wood44.ru",
    },
  };
  return (
    <div className="contacts__row" id="contacts">
      <Row justify="center">
        <Col xs={20} md={18} lg={16} xxl={12}>
          <div className="contacts">
            <div className="promise__head">
              <span className="promise__title title_bold">
                {contactsText[langContext.lang].title}
              </span>
              <span className="promise__subtitle title_thin">
                {contactsText[langContext.lang].subtitle}
              </span>
            </div>
            <div className="contacts__location" onClick={openMap}>
              <div className="contacts__location-icon hover">
                <EnvironmentOutlined />
              </div>
              <div className="contacts__address hover">
                <span className="contacts__street">
                  {contactsText[langContext.lang].street}
                </span>
                <span className="contacts__city">
                  {contactsText[langContext.lang].city}
                </span>
              </div>
            </div>
            <p className="contacts__info-block">
              <span className="contacts__hint">
                {contactsText[langContext.lang].hint}
              </span>
              <span className="contacts__title">
                {contactsText[langContext.lang].common}
              </span>
              <span className="contacts__info">
                {contactsText[langContext.lang].phone}
              </span>
            </p>
            <p className="contacts__info-block">
              <span className="contacts__title">
                {contactsText[langContext.lang].sales}
              </span>
              <span className="contacts__info">
                {contactsText[langContext.lang].phone}
              </span>
              <span className="contacts__info">
                {contactsText[langContext.lang].salesEmail}
              </span>
            </p>
            <p className="contacts__info-block">
              <span className="contacts__title">
                {contactsText[langContext.lang].paper}
              </span>
              <span className="contacts__info">
                {contactsText[langContext.lang].phone}
              </span>
              <span className="contacts__info">
                {contactsText[langContext.lang].paperEmail}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contacts;
