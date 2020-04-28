import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="card"
        src={`https://robohash.org/${props.card.id}?set=set2&size=180x180`}
      />
      <p>{props.card.name}</p>
      <h1>{props.card.email}</h1>
      <h2>{props.card.address.city}</h2>
    </div>
  );
};

export default Card;
