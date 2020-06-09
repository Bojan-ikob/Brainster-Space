import React from "react";
import "../css/zaNas.css";
import CardEdukacija from "../components/CardEdukacija";
import CardNastani from "./CardNastani";
import CardCoworking from "./CardCoworking";
import CardProstor from "./CardProstor";
import CardPartnerstvo from "./CardPartnerstvo";
import CardInovacii from "./CardInovacii";

const ZaNas = () => {
  return (
    <div className="zaNas">
      <h1>За Нас</h1>
      <div className="cardsDiv">
        <CardEdukacija />
        <CardNastani />
        <CardCoworking />
        <CardProstor />
        <CardPartnerstvo />
        <CardInovacii />
      </div>
    </div>
  );
};

export default ZaNas;
