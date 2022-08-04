import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./Details.css";
import Sun from "../../Images/sun.png";
import Clouds from "../../Images/cloudy-day.png";
import Rain from "../../Images/rainy-day.png";
import ApexChart1 from "../Detail1/Details";

export class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sunrise: "",
      sunset: "",
      time: new Date().toLocaleTimeString(),
      location: [],
      dailytemps: [],
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options1: {
        chart: {
          id: "basic-bar",
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [],
        },
      },
      series1: [
        {
          name: "Time",
          data: [],
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
          curve: "straight",
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
  componentDidMount() {
    console.log(this.props);
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
            sunrise: new Date(res.current.sunrise).toLocaleTimeString(),
            sunset: new Date(res.current.sunset).toLocaleTimeString(),
          });
          this.setState({
            location: res,
          });
          var temps = [];
          for (var i = 0; i <= 5; i++) {
            temps.push((res.hourly[i].temp / 10).toFixed(3));
          }
          let options1 = {
            ...this.state.options1,
            xaxis: {
              categories: [
                new Date(res.current.sunrise).toLocaleTimeString(),
                this.state.time,
                new Date(res.current.sunset).toLocaleTimeString(),
              ],
            },
          };
          this.setState({
            series: [
              {
                name: "Temperature",
                data: temps,
              },
            ],
            series1: [
              {
                name: "Time",
                data: [
                  new Date(res.current.sunrise).toLocaleTimeString(),
                  this.state.time,
                  new Date(res.current.sunset).toLocaleTimeString(),
                ],
              },
            ],
            options1: options1,
          });
        });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="temp">
                    {this.state.location.current
                      ? parseInt(this.state.location.current.temp / 10) +
                        "°" +
                        "C"
                      : 1}
                  </h1>
                </div>
                <div className="col-md-6 left-box">
                  <img
                    src={
                      this.state.location.current
                        ? this.state.location.current.weather[0].main ==
                          "Clouds"
                          ? Clouds
                          : this.state.location.current.weather[0].main ==
                            "Rain"
                          ? Rain
                          : Sun
                        : Sun
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col chart-card">
                  <div id="chart">
                    <ReactApexChart
                      options={this.state.options}
                      series={this.state.series}
                      type="line"
                      height={350}
                    />
                  </div>
                </div>
              </div>
              <div className="row blue">
                <div className="col-md-6 ">
                  <div className="blue-box">
                    <p className="property">Pressure</p>
                    <p>
                      {this.state.location.current
                        ? this.state.location.current.pressure + " " + "hpa"
                        : 1}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blue-box">
                    <p className="property">Humidity</p>
                    <p>
                      {this.state.location.current
                        ? this.state.location.current.humidity + "%"
                        : 1}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 ">
                    <span
                      className="content "
                      style={{
                        marginLeft: "10%",
                      }}
                    >
                      <h5>Sunrise</h5>
                      <p>7:22 Am</p>
                    </span>
                  </div>

                  <div className="col-md-6 ">
                    <span
                      className="content"
                      style={{
                        marginRight: "10%",
                      }}
                    >
                      <h5>Sunset</h5>

                      <p>6:12 pm</p>
                    </span>
                  </div>
                  <div className="col chart-card">
                    <div id="chart">
                      <ReactApexChart
                        options={this.state.options1}
                        series={this.state.series1}
                        type="area"
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
