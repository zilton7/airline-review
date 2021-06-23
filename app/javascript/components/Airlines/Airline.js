import React from "react";

const Airline = (props) => {
  return (
    <div className="card">
      <div className="airline-logo">
        <img src={image_url} alt={`${props.attributes.name} logo`} />
      </div>
      <div className="airline-name">{props.attributes.name}</div>
      <div className="airline-score">{props.attributes.avg_score}</div>
      <div className="airline-link">
        <a href={`/airlines/${props.attributes.slug}`}> View Airline</a>
      </div>
    </div>
  );
};

export default Airline;
