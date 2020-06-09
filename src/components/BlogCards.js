import React from "react";
import "../css/cadr.css";
const BlogCards = (props) => {
  return (
    <div className="all-cards">
      {props.blogData.map((item) => (
        <div className="one-card">
          <div className="image-div" style={{ width: "100%", height: "250px" }}>
            <img
              style={{ width: "100%" }}
              src={require(`../images/${item.image}`)}
              alt="slika"
            ></img>
          </div>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <div className="bottom-div">
            <span className="categorija">{item.kopce}</span>
            <span>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
