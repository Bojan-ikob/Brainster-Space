import React, { useState } from "react";
import Carusel, { BootstrapCarousel } from "./Carousel";
import BlogCards from "./BlogCards";
import blogData from "../blog.json";
import "../css/filter.css"
const Blog = ({ filterMenu }) => {
  const [blogCards, setBlogCards] = useState(blogData);
  const AllCards = () => {
    setBlogCards(blogData);
  }
  const designCards = () => {
    setBlogCards(blogData.filter(card => {
      return card.kopce === "ДИЗАЈН"
    }))
  }
  const KarieraCards = () => {
    setBlogCards(blogData.filter(card => {
      return card.kopce === "КАРИЕРА"
    }))
  }
  const TexCards = () => {
    setBlogCards(blogData.filter(card => {
      return card.kopce === "ТЕХНОЛОГИЈА"
    }))
  }
  const DSCards = () => {
    setBlogCards(blogData.filter(card => {
      return card.kopce === "DATA SCIENCE"
    }))
  }
  const MarketingCards = () => {
    setBlogCards(blogData.filter(card => {
      return card.kopce === "МАРКЕТИНГ"
    }))
  }
  const ImpactCards = () => {
    setBlogCards(blogData.filter(card => {
      return card.kopce === "IMPACT"
    }))
  }
  return (
    <div>
       <div className = {filterMenu ? "hide-filter" : "showCategorii" } >
        <ul>
          <li>ФЛИЛТРИРАЈ</li>
          <li onClick={AllCards}>СИТЕ</li>
          <li onClick={KarieraCards}>КАРИЕРА</li>
          <li onClick={TexCards}>ТЕХНОЛОГИЈА</li>
          <li onClick={DSCards}>DATA SCIENCE</li>
          <li onClick={MarketingCards}>МАРКЕТИНГ</li>
          <li onClick={designCards}>ДИЗАЈН</li>
          <li onClick={ImpactCards}>IMPACT</li>
         <a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152">
         <li>#SpaceFamily</li>
           </a>
        </ul>
      </div> 
      <Carusel />
      <BlogCards blogData={blogCards} key={133}/>
    </div>
  );
};

export default Blog;
