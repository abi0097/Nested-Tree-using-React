import React from "react";
import { Link } from "react-router-dom";

function Card({ title, address, mobile, id }) {
  return (
    <div className="card">
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <h3 className="card-title">{title}</h3>
        <h5 className="card-address">Address :</h5>
        <div className="card-body">
          <p className="card-text">
            {title} : {address}
          </p>
        </div>
        <h4 className="card-phone">Phone No : {mobile}</h4>
      </Link>
    </div>
  );
}

export default Card;
