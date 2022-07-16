import React, { useEffect } from "react";
import "./Lists.css";

const Lists = ({ location }) => {
  const apikey = "0a9c1f90b4077eeb5d173d604be0407f";
  useEffect(() => {
    var data = fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&appid=4d886172c1895e4091a5d922ec7ed531`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  });
  return (
    <div>
      <div className="daily-forecast">
        <div className="box">
          <p className="day">Fri</p>
          <p className="temp-details">
            <span className="day">29°</span>
            <span className="night">21°</span>
          </p>
        </div>
        <div className="box">
          <p className="day">Sat</p>
          <p className="temp-details">
            <span className="day">29°</span>
            <span className="night">21°</span>
          </p>
        </div>
        <div className="box">
          <p className="day">Sun</p>
          <p className="temp-details">
            <span className="day">29°</span>
            <span className="night">21°</span>
          </p>
        </div>
        <div className="box">
          <p className="day">Mon</p>
          <p className="temp-details">
            <span className="day">29°</span>
            <span className="night">21°</span>
          </p>
        </div>
        <div className="box">
          <p className="day">Tue</p>
          <p className="temp-details">
            <span className="day">29°</span>
            <span className="night">21°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lists;
