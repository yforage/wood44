import React from "react";

import { Col, Row } from "antd";

type ProductItemProps = {
  subtitle: string;
  title: string;
  urlImage: string;
  description: string[];
};

const ProductItem: React.FC<ProductItemProps> = ({
  subtitle,
  title,
  urlImage,
  description,
}) => {
  return (
    <div className="products__item">
      <div className="product__text-bg">
        <Row justify="center">
          <Col xs={20} md={18} lg={16} xxl={12}>
            <div className="products__item_info">
              <span className="products__item_subtitle title_bold">
                {subtitle}
              </span>
              <p className="products__item_title title_thin">{title}</p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="products__item_image"
        style={{ backgroundImage: `url(${urlImage})` }}
      />
      <div className="product__text-bg">
        <Row justify="center">
          <Col xs={20} md={18} lg={16} xxl={12}>
            <div className="products__item_description">
              {description.map((paragraph) => (
                <p key={paragraph} className="products__item_text">
                  {paragraph}
                </p>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductItem;
