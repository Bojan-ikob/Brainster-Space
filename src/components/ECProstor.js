import React from "react";
import "../css/edu.css";
import prostorImg from "../images/prostor za nastani.jpg";
const Prostor = () => {
  return (
    <div className="edukacija">
      <div className="show opis">
        <h1>
          Простор за<br></br> настани
        </h1>
        <p>
          Нашиот простор се прилагодува според потребите на вашиот настан. Седум
          различни простори и Space Kitchen.
        </p>
        <p>
          Наменски создадени да се прилагодуваат и менуваат во согласност со
          типот на настан кој го организирате.
        </p>
        <p>
          Организираме конференции до 150 учесници и обуки и предавања за групи
          до 20 учесници. Контактирај не за да ви хостираме одличен настан.
        </p>
        <div>
          <a href="#host">
            <button className="kopcinja blackBtn">
              <span>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </span>
              БУКИРАЈ НЕ
            </button>
          </a>
        </div>  
      </div>
      <div className="show slikaa">
        <img src={prostorImg} alt="slika"></img>
      </div>
    </div>
  );
};

export default Prostor;
