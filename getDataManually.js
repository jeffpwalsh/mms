import { gl_importData } from "./config.js";

// IMPORT DATA MANUALLY ON CLICK

const getDataManually = gl_importData.addEventListener(
  "click",
  function importData() {
    console.log("update requested");
    location.reload();
  }
);

export { getDataManually };
