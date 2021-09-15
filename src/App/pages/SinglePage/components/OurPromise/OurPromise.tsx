import { Col, Row } from "antd";

import { useLangContext } from "../..";
import "./OurPromise.css";

type ourPromiseTextType = {
  title: string;
  subtitle: string;
  text: string;
};

const OurPromise = () => {
  const langContext = useLangContext();
  const ourPromiseText: Record<string, ourPromiseTextType> = {
    en: {
      title: "OUR PROMISE",
      subtitle: "TO YOU",
      text: "When you decide to start co-operation with us, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made from the birch. If you are not satisfied, please let us know and we will do whatever we can to make things right!",
    },
    ru: {
      title: "МЫ ОБЕЩАЕМ",
      subtitle: "ВАМ",
      text: "Когда вы начнете работать с нами, мы приложим все усилия чтобы обеспечить вас лучшей продукцией, произведенной из знаменитой костромской березы. Если вас что то не устроило - дайте знать, и мы сделаем все возможное, чтобы это исправить!",
    },
  };

  return (
    <div className="promise__row" id="about">
      <Row justify="center">
        <Col xs={20} md={18} lg={16} xxl={12}>
          <div className="promise">
            <div className="promise__head">
              <span className="promise__title title_bold">
                {ourPromiseText[langContext.lang].title}
              </span>
              <span className="promise__subtitle title_thin">
                {ourPromiseText[langContext.lang].subtitle}
              </span>
            </div>
            <p className="promise__text">
              {ourPromiseText[langContext.lang].text}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurPromise;
