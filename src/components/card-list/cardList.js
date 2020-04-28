import React from "react";
import Card from "../card/card";
import "./cardList.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
