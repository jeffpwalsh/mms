import { gl_backgroundColourChange } from "./config.js";

//ONCLICK DISPLAYS COLOUR PICKER FEATURE
const editChart = document
  .getElementById("btn-bg")
  .addEventListener("click", function displayColours() {
    document.getElementById("colour-picker").style.display = "block";
  });

//ONSELECT SAVES NEW CHART BACKGROUND TO LOCAL STORAGE - DATA PERSISTS.
gl_backgroundColourChange.addEventListener("change", function barChart() {
  console.log(gl_backgroundColourChange.value);
  document.getElementById("myChart").style.backgroundColor =
    gl_backgroundColourChange.value;
  localStorage.setItem(
    "chart background colour",
    gl_backgroundColourChange.value
  );
});

export { editChart };
