/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample1 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    //TODO generate month and day data
    return {
      labels: [
        "SEP 12",
        "SEP 11",
        "SEP 10",
        "SEP 9",
        "SEP 8",
        "SEP 7",
        "SEP 6",
        "SEP 5",
        "SEP 4",
        "SEP 3",
        "SEP 2",
        "SEP 1",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [8, 7, 9, 3, 6, 7, 5, 10, 6, 7, 8, 5],
        },
      ],
    };
  },
  data2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "SEP 12",
        "SEP 11",
        "SEP 10",
        "SEP 9",
        "SEP 8",
        "SEP 7",
        "SEP 6",
        "SEP 5",
        "SEP 4",
        "SEP 3",
        "SEP 2",
        "SEP 1",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
        },
      ],
    };
  },
  data3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "SEP 12",
        "SEP 11",
        "SEP 10",
        "SEP 9",
        "SEP 8",
        "SEP 7",
        "SEP 6",
        "SEP 5",
        "SEP 4",
        "SEP 3",
        "SEP 2",
        "SEP 1",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample2 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["SEP 12", "SEP 11", "SEP 10", "SEP 9", "SEP 8", "SEP 7"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["SEP 7", "SEP 8", "SEP 9", "SEP 10", "SEP 11", "SEP 12"],
      datasets: [
        {
          label: "Hours",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [6.48, 4.5, 7.2, 8.5, 8, 6],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["SEP 12", "SEP 11", "SEP 10", "SEP 9", "SEP 8"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  },
};

module.exports = {
  chartExample1, // in src/views/Dashboard.js
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
};
