import React, { Fragment } from "react";
import Baner from "./Baner";
import ZaNas from "./ZaNas";
import Edukacija from "./Edukacija";
import Nastani from "./Nastani";
import Coworking from "./Coworking";
import Prostor from "./Prostor";
import Partneri from "./Partneri";
const Home = () => {
  return (
    <Fragment>
      <Baner />
      <ZaNas />
      <Edukacija />
      <Nastani />
      <Coworking />
      <Prostor />
      <Partneri />
    </Fragment>
  );
};

export default Home;
