import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Airline from "./Airline";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Get all airlines from API
    // Update airlines in our state

    axios
      .get("/api/v1/airlines.json")
      .then((response) => {
        setAirlines(response.data.data);
      })
      .catch((response) => console.log(response));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>AirlineReview</h1>
        <div className="subheader">Honest reviews by people like You.</div>
        <div className="grid">
          <ul>{grid}</ul>
        </div>
      </div>
      <div>This is the Airline index view</div>
      <ul>{grid}</ul>
    </div>
  );
};
export default Airlines;
