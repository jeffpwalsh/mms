//PRE-LOADING ANIMATION
const myTimeout = setTimeout(loader, 500);

function loader() {
  document.getElementById("loader").style.display = "none";
}

export { myTimeout };
