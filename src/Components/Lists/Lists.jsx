import React, { useEffect, useState } from "react";
import "./Lists.css";
import Rain from "../../Images/rainy-day.png";
import Clouds from "../../Images/cloudy-day.png";
import sun from "../../Images/sun.png";

const Lists = ({ location }) => {
  const [tempshourly, settempshourly] = useState([]);
  const [tempdaily, settempdaily] = useState([]);
  const [curweather, setcurweather] = useState([]);
  const days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
  useEffect(() => {
    var api_key = "4d886172c1895e4091a5d922ec7ed531";
    var data = fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely&appid=${api_key}`
    )
      .then((res) => res.json())
      .then((res) => {
        var daily = res.daily || [];
        var ans = [];
        var weather = [];
        for (var i = 0; i < 5; i++) {
          var day = daily[i].feels_like.day || 0;
          var night = daily[i].feels_like.night || 0;
          var weather1 = daily[i].weather[0].main || "Sunny";
          if (day > 0) {
            day = parseInt(day / 10);
            night = parseInt(night / 10);
          }
          ans.push([day, night]);
          weather.push(weather1);
        }
        settempdaily(ans);
        setcurweather(weather);
        console.log(res);
      });
  }, [location]);
  return (
    <div>
      <div className="daily-forecast">
        {days.map((element, j) => {
          return (
            <div>
              <div className="box">
                <p className="day">{element}</p>
                {tempdaily.length > 1 ? (
                  <p className="temp-details">
                    <span className="day">{tempdaily[j][0]}°</span>
                    <span className="night">{tempdaily[j][1]}°</span>
                  </p>
                ) : (
                  ""
                )}
                <span className="weather-icon">
                  <img
                    src={
                      curweather[j] == "Rain"
                        ? Rain
                        : curweather[j] == "Clouds"
                        ? Clouds
                        : sun
                    }
                    alt=""
                  />
                  <p>{curweather[j]}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
