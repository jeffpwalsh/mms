//IMPORT MODULES | COMPONENTS
import { getData, gl_timeStamp } from "./getData.js";
import {
  gl_displayColourPicker,
  gl_backgroundColourChange,
  gl_timeStampBTN,
} from "./config.js";

import { myTimeout } from "./preloader.js";
import { getDataManually } from "./getDataManually.js";
import { editChart } from "./editChart.js";

//ASYNC FUNCTION - GET API (DATA)
async function chart(chartChange) {
  await getData();

  //CHART CONFIGURATION
  const data = {
    labels: JSON.parse(localStorage.getItem("product brands")),
    datasets: [
      {
        label: "Price($)",
        data: JSON.parse(localStorage.getItem("product price")),
        backgroundColor: JSON.parse(localStorage.getItem("default colours")),
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const config = {
    type: localStorage.getItem("default chart"),
    data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "PRICE IN USD $",
          },
        },
        X: {
          beginAtZero: true,
          title: {
            display: true,
            text: "PHONE MANUFACTURER",
          },
        },
      },
    },
  };
  // RENDER CHART
  const myChart = new Chart(document.getElementById("myChart"), config);

  //------------------------------------------------------------------

  //UPDATE HTML ELEMENTS WITHIN CHART AFTER LOADING
  gl_timeStampBTN.innerHTML = `last fetch ${gl_timeStamp}`;
  document.getElementById("myChart").style.backgroundColor =
    localStorage.getItem("chart background colour");

  //CHART CHANGE - BAR
  chartChange = document.getElementById("btn-bar-chart");
  chartChange.addEventListener("click", function updateChart() {
    localStorage.removeItem("default chart");
    localStorage.setItem("default chart", "bar");
    myChart.config.type = "bar";
    (myChart.data.datasets[0].data = JSON.parse(
      localStorage.getItem("product price")
    )),
      (myChart.data.labels = JSON.parse(
        localStorage.getItem("product brands")
      )),
      (myChart.options.scales.X.title.text = "PHONE MANUFACTURER");
    myChart.options.scales.y.title.text = "PRICE IN USD $";
    myChart.update();
  });

  //CAHRT CHANGE - LINE
  chartChange = document.getElementById("btn-line-chart");
  chartChange.addEventListener("click", function updateChart() {
    localStorage.removeItem("default chart");
    localStorage.setItem("default chart", "line");
    myChart.config.type = "line";
    (myChart.data.datasets[0].data = JSON.parse(
      localStorage.getItem("product price")
    )),
      (myChart.data.labels = JSON.parse(
        localStorage.getItem("product brands")
      )),
      (myChart.options.scales.X.title.text = "PHONE MANUFACTURER");
    myChart.options.scales.y.title.text = "PRICE IN USD $";
    myChart.update();
  });

  //CAHRT CHANGE - WATERFALL
  chartChange = document.getElementById("btn-wat-chart");
  chartChange.addEventListener("click", function updateChart() {
    myChart.config.type = "bar";
    myChart.data.datasets[0].data = [
      [18, 12],
      [12, 6],
      [6, 9],
      [9, 12],
      [12, 15],
      [15, 16],
      [16, 12],
      [12, 14],
      [14, 10],
      [10, 5],
    ];
    myChart.data.labels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
    ];
    myChart.data.datasets[0].label = "Product";
    console.log(config);
    myChart.options.scales.X.title.text = "MONTH";
    myChart.options.scales.y.title.text = "METRIC TONS";
    myChart.update();
  });
}

//CALL CHART FUNCTION
chart();
