import React from "react";
import "./GalleryItem.css";

type GalleryItemProps = {
  title: string;
  text: string;
  urlImage: string;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ title, text, urlImage }) => {
  return (
    <div className="gallery__item">
      <div className="gallery__image-wrap">
        <img className="gallery__image" src={urlImage} alt="" />
      </div>
      <div className="gallery__description">
        <p className="gallery__title title_bold">{title}</p>
        <span className="gallery__text">{text}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
