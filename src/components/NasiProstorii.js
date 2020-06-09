import React from "react";
import "../css/cadr.css";
import brSlika from "../images/2.jpg";
import Slika1 from "../images/C3 EXIBITION_1.jpg";
import Slika2 from "../images/C3 2.jpg";
import Slika3 from "../images/C3 1.jpg";
import Slika4 from "../images/C2 1.jpg";
import Slika5 from "../images/C1 1.jpg";
import Slika6 from "../images/HOL KON SEDENJE.jpg";
import Slika7 from "../images/C1 4.jpg";
import Slika8 from "../images/KITCHEN_03.jpg";
const NasiProstorii = () => {
  return (
    <div className="prostorii">
      <div className="opis-prostor">
        <h1>Нашите простории</h1>
        <p>
          Комплетно адаптибилни. Една сала за 150 учесници или три помали сали
          за групи од по 50 учесника. Училници за од 25 до 50 учесника. Избор од
          две локации.
        </p>
        <p>Пулт за прием.И најважното место за networking-Brainster Kitchen</p>
        <p>Како го замислувате вашиот следен настан?</p>
      </div>
      <div className="sliki-prostorii">
        <div className="s-p-i">
          <img src={brSlika} alt="slika"></img>
          <h4>Brainster</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika1} alt="slika"></img>
          <h4>Конференциска сала</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika2} alt="slika"></img>
          <h4>Сала со бина</h4>
        </div>

        <div className="s-p-i">
          <img src={Slika3} alt="slika"></img>
          <h4>Адаптибилна училница</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika4} alt="slika"></img>
          <h4>Училница</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika5} alt="slika"></img>
          <h4>Училница</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika6} alt="slika"></img>
          <h4>Хол</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika7} alt="slika"></img>
          <h4>Канцелариски простор</h4>
        </div>
        <div className="s-p-i">
          <img src={Slika8} alt="slika"></img>
          <h4>Space Kichen</h4>
        </div>
      </div>
    </div>
  );
};

export default NasiProstorii;
