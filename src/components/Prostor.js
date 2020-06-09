import React from "react";
import { Link } from "react-router-dom";
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
          Можност за презентации, обуки, конференции, netwoking настани. Одбери
          ја просторијата која најмногу ќе одговара на твојата идеја. Го
          задржуваме правото да одбереме кој настан ќе се организира во нашиот
          Brainster Space.
        </p>
        <div>
          <Link to="/prostor-za-nastani">
            <button className="kopcinja blackBtn">
              <span>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
              ВИДИ ГО ПРОСТОРОТ
            </button>
          </Link>
        </div>
      </div>
      <div className="show slikaa">
        <img src={prostorImg} alt="slika"></img>
      </div>
    </div>
  );
};

export default Prostor;
