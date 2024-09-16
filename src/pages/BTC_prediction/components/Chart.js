import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Chart from "react-apexcharts";

const Chartmain = () => {
  const [xaxis, setXaxis] = useState([]);
  const [yaxis, setYaxis] = useState([]);
  const [btcprice, setBtcprice] = useState(0);
  const [btcchange, setBtcchange] = useState(0);
  const options = {
    xaxis: {
      categories: xaxis,
      lines: {
        show: true,
      },
      labels: {
        style: {
          colors: "#666666",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        offsetY: 10,
      },
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: "#666666",
          fontSize: "12px",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#111311",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#69DC4E"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
  };
  const series = [
    {
      name: "series-1",
      data: yaxis,
    },
  ];

  useEffect(() => {
    let time = [];
    let price = [];
    function fetchchart() {
      axios
        .get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly")
        .then(function (response) {
          // handle success
          //   console.log(response);
          response.data.prices.map((data) => {
            const milliseconds = data[0];
            const dateObject = new Date(milliseconds);
            time.push(
              dateObject.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })
            );
            price.push(data[1].toFixed(2));
          });
          setXaxis(time);
          setYaxis(price);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function fetchprice() {
      axios
        .get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true")
        .then(function (response) {
          // handle success
          //  console.log(response);

          setBtcprice(response.data.bitcoin.usd);
          setBtcchange(response.data.bitcoin.usd_24h_change.toFixed(2));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    fetchprice();
    fetchchart();
    const interval = setInterval(() => {
      time = [];
      price = [];
      fetchprice();
      fetchchart();
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ChartOuter>
      <div className="pricelive">
        <h4>
          1<small>BTC</small>
          <span className={btcchange >= 0 ? "up" : "down"}>
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.3"
                d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                fill={btcchange >= 0 ? "#69DC4E" : "#F05E47"}
              />
            </svg>
            {btcchange}%
          </span>
        </h4>
        <h6>${btcprice}</h6>
      </div>
      <Chart options={options} series={series} type="area" width="100%" height={600} />
    </ChartOuter>
  );
};

const ChartOuter = styled.div`
  .pricelive {
    h4 {
      font-weight: 700;
      small {
        margin-left: 6px;
        font-weight: 700;
      }
    }
    h6 {
      color: #808080;
    }
    .up {
      font-weight: 500;
      font-size: 16px;
      background: #10210c;
      color: #69dc4e;
      border-radius: 7px;
      padding: 7px 14px;
      margin-left: 10px;
      svg {
        transform: scale(1.5);
        margin-right: 8px;
        margin-bottom: 2px;
      }
      path {
        fill: #69dc4e !important;
      }
    }
    .down {
      font-weight: 500;
      font-size: 16px;
      background: #4b3430;
      color: #f05e47;
      border-radius: 7px;
      padding: 7px 14px;
      margin-left: 10px;
      svg {
        transform: scale(1.5) rotate(180deg);
        margin-right: 8px;
        margin-bottom: 2px;
      }
    }
  }
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0%;
    bottom: 0px;
    background: radial-gradient(50% 50% at 50% 50%, #69dc4e 0%, rgba(105, 220, 78, 0) 100%);
    opacity: 0.11;
    filter: blur(200px);
    z-index: -1;
  }
`;

export default Chartmain;
export {};
