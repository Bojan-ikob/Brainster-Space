import React from "react";
import "../css/cadr.css";
const CardCodeworks = () => {
  return (
    <div className="card">
      <div className="ddmImg cardd">
        <div className="rgba"></div>
      </div>
      <div className="opisCadr">
        <h3>Deep Dive into Marketing</h3>
        <p>
        Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти поогнат да ги совладаш и 
        предвидиш современите промени, предизвици и идните трендови во областа на маркетингот. 
        </p>
      </div>
      <div className="arrowDiv">
        <span>
          <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default CardCodeworks;