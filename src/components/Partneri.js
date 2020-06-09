import React from "react";
import { Link } from "react-router-dom";
import "../css/cadr.css";
const Partneri = () => {
  return (
    <div className="partneri" id="partneri">
      <h1>Партнери</h1>
      <h3>Имаш идеја? Отворени сме за соработка</h3>
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
  );
};

export default Partneri;
