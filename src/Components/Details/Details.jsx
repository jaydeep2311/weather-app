import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./Details.css";
import Sun from "../../Images/sun.png";
import Clouds from "../../Images/cloudy-day.png";
import Rain from "../../Images/rainy-day.png";

export class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: [],
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
          curve: "straight",
        },
        title: {
          text: "Product Trends by Month",
          align: "left",
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
      },
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("hellllo", this.props.location);
    if (
      prevProps.location &&
      prevProps.location.value != this.props.location.value
    ) {
      var data = fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.location.lat}&lon=${this.props.location.lng}&exclude=minutely&appid=4d886172c1895e4091a5d922ec7ed531`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({
            location: res,
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
                <div className="col-md-6 sunrise">
                  <span className="content">
                    <h5>Sunrise</h5>
                    <p>7:22 Am</p>
                  </span>
                </div>
                <div className="col-md-6 sunset">
                  <span className="content">
                    <h5>Sunset</h5>
                    <p>6:12 pm</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
