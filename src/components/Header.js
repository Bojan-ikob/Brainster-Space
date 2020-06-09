import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";
import logo from "../brainster_space_logo.svg";

const Header = ({ showFilterMenu }) => {
  const [menu, setMenu] = useState(true);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <Fragment>
      <div className="header">
        <div className="l-l">
          <NavLink to="/">
            <div className="logo">
              <img src={logo} alt="slika"></img>
            </div>
          </NavLink>
          <div className={menu ? "navs navs-mobile" : "d-none"}>
            <ul>
              <NavLink to="/space-blog">
                <li>SPACE БЛОГ</li>
              </NavLink>
              <li>
                <a href="#nastani" className="b-a">НАСТАНИ</a>
              </li>
              <li>
                <a href="#coworking" className="b-a">CO-WORKING</a>
              </li>
              <NavLink to="/akademii">
                <li>АКАДЕМИИ</li>
              </NavLink>
              <NavLink to="/prostor-za-nastani">
                <li>ПРОСТОР ЗА НАСТАНИ</li>
              </NavLink>
              <li>
                <a href="#partneri" className="b-a">ПАРТНЕРСТВА</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-right">
          <div className="prikluci">
            <ul>
              <NavLink to="/form">
                <li>
                  <span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </span>
                  ПРИКЛУЧИ СЕ
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="filter-mob-menu" onClick={showFilterMenu}><i className="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
          <div className="menu-hamburger" onClick={showMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
