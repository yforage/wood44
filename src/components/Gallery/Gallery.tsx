import React from "react";

import { Carousel, Col, Row } from "antd";

import "./Gallery.scss";
import { useLangContext } from "../../App/pages/SinglePage";
import GalleryItem from "./components/GalleryItem";
import dryerloadImage from "./images/dryerload.jpg";
import logconvImage from "./images/logconv.jpg";
import logsoutImage from "./images/logsout.jpg";
import peelingImage from "./images/peeling.jpg";
import poolinImage from "./images/poolin.jpg";
import stackingImage from "./images/stacking.jpg";
import stockImage from "./images/stock.jpg";
import truckloadImage from "./images/truckload.jpg";

type galleryTextType = {
  title: string;
  text: string;
};

const Gallery: React.FC = () => {
  const langContext = useLangContext();
  const galleryText: Record<string, Record<string, galleryTextType>> = {
    en: {
      logStorage: {
        title: "LOG STORAGE",
        text: "Waiting for a processing",
      },
      heatingPool: {
        title: "HEATING POOL",
        text: "We are put the wood in a hot water",
      },
      logConveior: {
        title: "LOG CONVEIOR",
        text: "Logs are moving towards peeling machine",
      },
      peeling: {
        title: "PEELING",
        text: "Peeling process",
      },
      stacking: {
        title: "STACKING",
        text: "Stacking peeled veneer shits",
      },
      drying: {
        title: "DRYING",
        text: "Wet will be dry",
      },
      stock: {
        title: "STOCK",
        text: "Wait a little",
      },
      truckLoading: {
        title: "TRUCK LOADING",
        text: "Have a good trip!",
      },
    },
    ru: {
      logStorage: {
        title: "СКЛАД СЫРЬЯ",
        text: "В ожидании переработки",
      },
      heatingPool: {
        title: "ГОРЯЧИЙ БАССЕЙН",
        text: "Предварительное замачивание леса в бaссейне с горячей водой",
      },
      logConveior: {
        title: "КОНВЕЙЕР КРЯЖА",
        text: "Бревна двигаются к лущильному станку",
      },
      peeling: {
        title: "ЛУЩЕНИЕ",
        text: "Идёт лущение",
      },
      stacking: {
        title: "ФОРМИРОВАНИЕ ПАЧКИ",
        text: "Лист к листу",
      },
      drying: {
        title: "СУШКА",
        text: "Загрузка в сушилку",
      },
      stock: {
        title: "СКЛАД",
        text: "В ожидании",
      },
      truckLoading: {
        title: "ОТГРУЗКА",
        text: "Счастливого пути!",
      },
    },
  };

  return (
    <div className="gallery__row" id="gallery">
      <Row justify="center">
        <Col xs={22} sm={20} lg={18} xl={16} xxl={9}>
          <div className="gallery">
            <Carousel autoplay dotPosition="top">
              <GalleryItem
                title={galleryText[langContext.lang].logStorage.title}
                text={galleryText[langContext.lang].logStorage.text}
                urlImage={logsoutImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].heatingPool.title}
                text={galleryText[langContext.lang].heatingPool.text}
                urlImage={poolinImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].logConveior.title}
                text={galleryText[langContext.lang].logConveior.text}
                urlImage={logconvImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].peeling.title}
                text={galleryText[langContext.lang].peeling.text}
                urlImage={peelingImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].stacking.title}
                text={galleryText[langContext.lang].stacking.text}
                urlImage={stackingImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].drying.title}
                text={galleryText[langContext.lang].drying.text}
                urlImage={dryerloadImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].stock.title}
                text={galleryText[langContext.lang].stock.text}
                urlImage={stockImage}
              />
              <GalleryItem
                title={galleryText[langContext.lang].truckLoading.title}
                text={galleryText[langContext.lang].truckLoading.text}
                urlImage={truckloadImage}
              />
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
