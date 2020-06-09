import React from "react";
import "../css/spacekitchen.css";
const SpaceKitchen = () => {
  return (
    <div className="s-kichen">
      <div className="prvi-sliki">
        <div className="p-p-p"></div>
        <div className="vtori-sliki">
          <div className="pola-k1"></div>
          <div className="pola-k2"></div>
        </div>
      </div>
      <div className="k-sl"></div>
      <div className="opis-k">
        <h1>Space Kitchen</h1>
        <p>
          Место каде сите настани започнуваат и завршуваат. Место каде нашиот
          тим готви и експериментира. Нашата кујна има само едно правило.
        </p>
        <p>
          Храната мора да биде вегетаријанска.Пијалок, кафе или мезе . Вие
          одбирате вид на кетеринг ние ќе го обезбедиме.
        </p>
      </div>
    </div>
  );
};

export default SpaceKitchen;
