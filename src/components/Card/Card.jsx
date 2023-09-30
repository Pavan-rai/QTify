import React from "react";
import Styles from "./Card.module.css";
import { ReactComponent as CardImage } from "../../assets/CardImage.svg";

const Card = () => {
  return (
    <>
    <div className={Styles.cardContainer}>
      <CardImage />
     <div className={Styles.cardFollowersCount} > 100M Follows</div>
    </div>
    <div  className={Styles.cardTitle}>New Bollywood</div>
    </>
  );
};

export default Card;
