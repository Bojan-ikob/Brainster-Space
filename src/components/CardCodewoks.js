import React from "react";
import "../css/nastani.css";
const CardCodeworks = () => {
  return (
    <div className="card">
      <div className="codeworksImg cardd">
        <div className="rgba"></div>
      </div>
      <div className="opisCadr">
        <h3>Codeworks</h3>
        <p>
        Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата.
        Настан кој ги поврзува mid progamers со IT компаниите.<br></br>
        Deep Dive Intensive Seminar<br></br>
        Експлузивни семинари кои комбинираат три техники на учење.    
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