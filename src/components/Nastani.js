import React from "react";
import { Link } from "react-router-dom";
import "../css/nastani.css";
import CardCodeworks from "./CardCodewoks";
import CardDDM from "./CardDDM";
import CardDataScience from "./CadrDataScience";
const Nastani = () => {
  return (
    <div className="nas" id="nastani">
      <h1 className="text-center">Настани</h1>
      <div className="nastani">
        <CardCodeworks />
        <CardDDM />
        <CardDataScience />
      </div>
      <div className="btnKalendar">
        <Link to="/kalendar">
          <button className="btnk">
            <span>
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </span>
            КАЛЕНДАР НА НАСТАНИ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nastani;
