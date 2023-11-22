import React from "react";
import Card from "./Card";
import data from "../data/company.json";

function Container() {
  return (
    <div className="App">
      <div className="card-container">
        {data.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} content={card.address} address={card.address} mobile={card.mobile} />
        ))}
      </div>
    </div>
  );
}

export default Container;
