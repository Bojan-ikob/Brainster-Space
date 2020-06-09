import React from 'react';
import "../App.css";
import ECProstor from "./ECProstor";
import NasiProstorii from "./NasiProstorii";
import SpaceKitchen from './SpaceKitchen';
import Nudime from './Nudime';
import Host from './Host';
const EventSpace = () => {
    return ( 
        <div>
          <ECProstor />
          <NasiProstorii />
          <SpaceKitchen />
          <Nudime />
          <Host />
        </div>
     );
}
 
export default EventSpace;