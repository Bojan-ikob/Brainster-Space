import React, { Component } from "react";
import "../css/carousel.css";
import Carousel from "react-bootstrap/Carousel";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}></div>
        </div>
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/slika.JPEG"}
                alt="slika"
              ></img>
              <Carousel.Caption>
                <span className="categorija">Кариера</span>
                <h3 style={{fontSize : "30px", fontWeight: "bold"}}>
                  Deep Dive семинари јои ќе овозможат брз кариерен напредок.
                </h3>
                <p style={{fontSize: "15px", color:"white"}}>
                  Нов продукт од Brainster Space. Интензивни дводелни семинари
                  кои ќе ти помогнат од Mid level брзо да го постигнеш твојот
                  Senior напредок.
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/2.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>
                  Ако не те бива за програмирање дали можеш да имаш кариера во
                  Tech?
                </h3>
                <p style={{fontSize: "15px", color:"white"}}>
                  Tech индустријата е најпосакуваната облазт за работа, заради
                  големата побарувачка. Секојдневните промени и големиот инкам
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/OFIS LEASURE_01_1.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>Што значи денес, твојата канцеларија да е smart?</h3>
              <p style={{fontSize: "15px", color:"white"}}>
                  На отварањето на Brainster Space, добивме супер
                  подарок-smart-home уред. Голем дел од нас беа збунети за тоа
                  што се можеме добиеме со него.
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/slika.JPEG"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>Како до кариера во Data Science?</h3>
              <p style={{fontSize: "15px", color:"white"}}>
                  Од искуство на студентите на нашата академија, решивме да ви
                  помогнеме со неколку tips за потребните skills за да започнете
                  да работите Data Science
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/instruktori.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>
                  Интервју со Николај Ванчев, арт директор во Tank,Estonia.
                  #SpaceFamily
                </h3>
                <p style={{fontSize: "15px", color:"white"}}>
                  Николај Ванчев е Creative director во TANK (Естонија).
                  Неговата успешна 12 годишна кариера како арт директор тој ја
                  гради во реномирани агенции...
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/Untitled.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>
                  Зошто дизајн, накратко со Дијана Димитриевска #SpaceFamily
                </h3>
                <p style={{fontSize: "15px", color:"white"}}>
                  Интервју со Дијана Димитриевска, графички дизајнер, DJ и
                  инструктор на Академијата за графички дизајн во Brainster.
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/IMG_7481.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>Што е потребно за добар мобилен дизајнер</h3>
              <p style={{fontSize: "15px", color:"white"}}>
                  UX/UI дизајнерите се дигитални продукт дизајнери.Нивна задача
                  е да создадат корисен, релевантен и едноставен за корисниците
                  продукт.
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/Team-Picture-1200x600.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>
                  Македонско-американската компанија Upshift доби инвестиција од
                  3,7 милиони...
                </h3>
                <p style={{fontSize: "15px", color:"white"}}>
                  Он-диманд платформата за работа се шири со нова рунда
                  фриленсирање предводена од Recruit која е најглемата HR Tech
                  компанија во светот.
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                style={{ height: "70vh" }}
                className="d-block w-100"
                src={"assets/img/20191128_141433810_iOS-1200x600.jpg"}
                alt="slika"
              ></img>
              <Carousel.Caption>
              <span className="categorija">Кариера</span>
              <h3 style={{fontSize : "30px", fontWeight: "bold"}}>
                  Локалната апликација Challenger и нејзиниот импакт.
                  #SpaceFamily
                </h3>
                <p style={{fontSize: "15px", color:"white"}}>
                  Мисијта на Challenger е да создаде опчтествено одговорна
                  заедница која создава позитивна промена преку развивање на
                  подобри индивидуални навики...
                </p>
                <span className="span-arrow"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
