// GLOBAL VAR DECLARATION - EXPORTED ACCROSS APPLICATION

let gl_defaultChart; //string, single value
let gl_updatedChart; //string, single value
let gl_chartBackgroundColour; //string, single value
let gl_updatedChartBackgroundColour; //string, single value
let gl_defaultColours; //Array
let gl_defaultWaterfallData; //Array
let gl_displayColourPicker = document.getElementById("btn-bg"); //Menu Button
let gl_backgroundColourChange = document.getElementById("colour-picker"); //Sub-menu button
let gl_importData = document.getElementById("btn-import-data"); //Menu Button
let gl_timeStampBTN = document.getElementById("timestamp"); //Menu container - logs time
let date = new Date(); //Date Object
let gl_timeStamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; //time stamp

//GLOBAL DEFAULT SETTINGS FOR CHARTS - POSTS TO WEB STORAGE API / LOCAL STORAGE

gl_defaultChart = "bar";
gl_chartBackgroundColour = "#fff";

gl_defaultColours = [
  "#d45087",
  "#f95d6a",
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#ff7c43",
  "#ffa600",
  "#003f5c",
];
gl_defaultWaterfallData = [
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

//UPDATE LOCAL STORAGE WITH DEFAULT SETTINGS VALUES - CHART TYPE
if (
  localStorage.getItem("default chart") === "bar" ||
  localStorage.getItem("default chart") === null
) {
  console.log("default chart loaded");
  localStorage.setItem("default chart", gl_defaultChart);
} else {
  gl_updatedChart = localStorage.getItem("default chart");
  localStorage.setItem("default chart", gl_updatedChart);
}

//UPDATE LOCAL STORAGE WITH DEFAULT SETTINGS VALUES - BACKGROUND COLOUR
if (
  localStorage.getItem("chart background colour") === "#fff" ||
  localStorage.getItem("chart background colour") === null
) {
  console.log("default chart background colour loaded");
  localStorage.setItem("chart background colour", gl_chartBackgroundColour);
} else {
  gl_updatedChartBackgroundColour = localStorage.getItem(
    "chart background colour"
  );
  localStorage.setItem(
    "chart background colour",
    gl_updatedChartBackgroundColour
  );
}

localStorage.setItem("default colours", JSON.stringify(gl_defaultColours));
localStorage.setItem("waterfall data", JSON.stringify(gl_defaultWaterfallData));

export {
  gl_displayColourPicker,
  gl_backgroundColourChange,
  gl_importData,
  gl_timeStamp,
  gl_defaultWaterfallData,
  gl_timeStampBTN,
  gl_chartBackgroundColour,
  gl_updatedChartBackgroundColour,
};
