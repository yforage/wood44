import { Col, Image, Row } from "antd";

import cert0 from "./certificate_fsc-0.jpg";
import cert1 from "./certificate_fsc-1.jpg";

import "./Certificates.css";

const Certificates: React.FC = () => {
  return (
    <div className="certs__row" id="certificates">
      <Row justify="center">
        <Col xs={20} md={18} lg={16} xxl={12}>
          <div className="certs">
            <Image.PreviewGroup>
              <div className="cert__item">
                <Image className="cert__image" src={cert0} />
              </div>
              <div className="cert__item">
                <Image className="cert__image" src={cert1} />
              </div>
            </Image.PreviewGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Certificates;
