import React, { useState } from "react";
import "../css/edu.css";
import coworkingImg from "../images/coworking.jpg";
const Coworking = () => {
  const [poraka, setporaka] = useState(false);
  const prikazi = () => setporaka(!poraka);
  return (
    <div className="edukacija" id="coworking">
      <div className="slikaa">
        <img
          src={coworkingImg}
          alt="slika"
        ></img>
      </div>
      <div className="opis cow">
        <span className="prodadeno">SOLD OUT</span>
        <h1 className="linethrou">Coworking</h1>
        <p className="linethrou">
          Биди дел од tech заедницата на иноватори, креативци и предприемачи
          .Резервирај стол во нашата shared office. Пичирај го твојот бизнис и
          нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите
          канцеларии.
        </p>
        <button className="blackBtn kopcinja st linethrou orange" onClick={prikazi}>
         РЕЗЕРВИРАЈ МЕСТО
        </button>
        <span className={poraka ? "showp" : "hidep"}>Местата се распродадени</span>
      </div>
    </div>
  );
};

export default Coworking;
