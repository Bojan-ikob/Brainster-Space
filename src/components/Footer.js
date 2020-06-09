import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from "../brainster_space_logo.svg";

const Footer = () => {
  const [popup, setpopup] = useState(false);
  const showPopUp = () => {
    setpopup(true);
  };
  const hidePopUp = () => {
    setpopup(false);
  };
  const toTop = () => {
    window.scrollTo (0,0);
  }
  return (
    <Fragment>
      <div>
        <div className="footer">
          <div className="listi">
            <div className="lista">
              <h4>Корисни линкови</h4>
              <ul>
                <li onClick={showPopUp}>Контакт</li>
                <li>
                  <a href="https://www.wearelaika.com/">Отворени позиции</a>
                </li>
                <li>
                  <a href="https://medium.com/wearelaika/brainster-space-the-">
                    Галерија
                  </a>
                </li>
                <li>
                  <Link to="/kalendar">Календар</Link>
                </li>
              </ul>
            </div>
            <div className="mrezi">
              <h4>Социјални мрежи</h4>
              <div>
                <a href="https://www.facebook.com/">
                  <span>
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </span>
                </a>
                <a href="https://www.linkedin.com/">
                  <span>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </span>
                </a>
                <a href="https://www.instagram.com/">
                  <span>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="logo" onClick={toTop}>
            <img src={logo} alt="slika"></img>
          </div>
        </div>
        <div className="t-c">
          <p>COPYRIGHTS@BrainsterSpace All Rights Reserved</p>
        </div>
      </div>
      <div className={popup ? "popup" : "hide-popup"}>
        <p className="close-fw" onClick={hidePopUp}>
          Затвори <i className="fa fa-times" aria-hidden="true"></i>
        </p>
        <p>емаил: anja@brainster.co</p>
        <p>телефон: 123 456 789</p>
      </div>
    </Fragment>
  );
};

export default Footer;
