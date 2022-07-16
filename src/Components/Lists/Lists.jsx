import React, { useEffect } from "react";

const Lists = ({ location }) => {
  const apikey = "0a9c1f90b4077eeb5d173d604be0407f";
  useEffect(() => {
    var data = fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=xml&appid=${apikey}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  });
  return <div>{location[0]}</div>;
};

export default Lists;
