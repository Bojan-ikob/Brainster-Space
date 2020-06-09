import React from "react";
import "../css/akademii.css";
import data from "../akademii.json";
const AkademiiCards = () => {
  return (
    <div className="academii-crds">
      {data.map((card) => ( 
        <div
          className="cardAcademii"
          style={{
            // background: `url(../images/${card.image})`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // borderRadius: "5px",
            // width: "30%",
            // marginTop: "40px"
          }}
        >
          <a href={card.link}>
            {/* <img src={require(`images.${card.image}.jpg`)}></img> */}
            <h1>{card.title}</h1>
            <p>{card.mesta}</p>
            <p>{card.upisi}</p>
            <p>{card.postani}</p>
            <p>{card.partneri}</p>
            {/* </div> */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default AkademiiCards;
