import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./Details.css";
import Sun from "../../Images/sun.png";
import Clouds from "../../Images/cloudy-day.png";
import Rain from "../../Images/rainy-day.png";

export class ApexChart1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: [],
      dailytemps: [],
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "9AM",
            "10AM",
            "11AM",
            "12PM",
            "1PM",
            "2PM",
            "3PM",
            "4PM",
          ],
        },
        yaxis: {
          categories: ["20", "21", "22", "23", "24", "25", "26", "27"],
          show: true,
        },
      },
    };
  }
  componentDidUpdate(prevProps, prevState) {
    var api_key = "4d886172c1895e4091a5d922ec7ed531";
    console.log("hellllo", this.props.location);
    if (
      prevProps.location &&
      prevProps.location.value != this.props.location.value
    ) {
      var data = fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.location.lat}&lon=${this.props.location.lng}&exclude=minutely&appid=${api_key}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({
            location: res,
          });
          var temps = [];
          for (var i = 0; i <= 5; i++) {
            temps.push((res.hourly[i].temp / 10).toFixed(3));
          }
          this.setState({
            series: [
              {
                name: "Temperature",
                data: temps,
              },
            ],
          });
        });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    );
  }
}
