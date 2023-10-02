import React from "react";
import Styles from "./Card.module.css";
import { ReactComponent as CardImage } from "../../assets/CardImage.svg";
import { Chip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;

        return (
          <div className={Styles.wrapper}>
            <div className={Styles.card}>
              <img src={image} alt="album" width={160} />
              <div className={Styles.banner}>
                <Chip  className={Styles.chip} label={`${follows}`} Follows  size="small" />
              </div>
            </div>
            <div className={Styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
