import React from "react";
import "../css/cadr.css";
const CardCoworking = () => {
  return (
    <div className="card">
      <div className="coworkImg cardd">
        <div className="rgba"></div>
      </div>
      <div className="opisCadr">
        <h3>Coworking</h3>
        <p>
          Научи практични вештини за трансформација во кариерата. Наша
          специјалност е да ти помогнеме да го најдеш правилниот skill set кој
          ќе одговори на реалните потреби на пазарот на труд.Организираме
          академии, курсеви и персонализирани обуки кои одговараат на реалните
          потреби на денешницата.
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

export default CardCoworking;