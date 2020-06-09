import React, { useState } from "react";
import "../css/edu.css";
import edukacijaSlika from "../images/edukacija1.jpg";
import kompaniiSlika from "../images/edukacija2.jpg";
const Edukacija = () => {
  const [edu, setEdu] = useState(true);
  const change = () => setEdu(false);
  const changeTrue = () => setEdu(true);
  return (
    <div className="edukacija">
      <div className={edu ? "show opis" : "hide"}>
        <h1>Едукација</h1>
        <p>
          Компаниите имаат можност да ги надоградат своте тимови,а со тоа да го
          подобрат перформансот на својата компанија.
        </p>
        <p>
          Дигитлната трансформација се случува, а вашите компании треба да бидат
          подготвени да се адаптираат соодветно Обуки, семинари, курсеви или
          team building?
        </p>
        <p>
          Во Brainster Space имаме специјално обучен тим кој е подготвен да ја
          насочи и адаптира својата експертиза со денешните потреби на
          компаниите.
        </p>
        <div>
          <button
            className={edu ? "kopcinja yelowBtn" : "blackBtn kopcinja"}
            onClick={changeTrue}
          >
            АКАДЕМИИ
          </button>
          <button
            className={edu ? "kopcinja blackBtn" : "yelowBtn kopcinja"}
            onClick={change}
          >
            ЗА КОМПАНИИ
          </button>
        </div>
      </div>
      <div className={edu ? "hide" : "show opisZaKompanii"}>
        <h1>Компании</h1>
        <p>
          Во Brainster Space имаме специјално обучен тим кој е подготвен да ја
          насочи и адаптира својата експертиза со денешните потреби на
          компаниите.
        </p>
        <p>
          Дигитлната трансформација се случува, а вашите компании треба да бидат
          подготвени да се адаптираат соодветно Обуки, семинари, курсеви или
          team building?
        </p>
        <p>
          Компаниите имаат можност да ги надоградат своте тимови,а со тоа да го
          подобрат перформансот на својата компанија.
        </p>
        <div>
          <button
            className={edu ? "kopcinja yelowBtn" : "blackBtn kopcinja"}
            onClick={changeTrue}
          >
            АКАДЕМИИ
          </button>
          <button
            className={edu ? "kopcinja blackBtn" : "yelowBtn kopcinja"}
            onClick={change}
          >
            ЗА КОМПАНИИ
          </button>
        </div>
      </div>

      <div className={edu ? "show slikaa" : "hide "}>
        <img src={edukacijaSlika} alt="slika"></img>
      </div>
      <div className={edu ? "hide" : "show slikaa slikaaZaKompanii"}>
        <img src={kompaniiSlika} alt="slika"></img>
      </div>
    </div>
  );
};

export default Edukacija;
