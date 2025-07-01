const linkSaldi = document.getElementById("hideSaldi");
const linkSummer = document.getElementById("linkSummer");

const hideS = function () {
  const sRow = document.getElementById("saldiRow");
  let sRowDisp = window.getComputedStyle(sRow);
  if (sRowDisp.display !== "none") {
    sRow.style.display = "none";
  } else {
    sRow.style.display = "flex";
  }
};

const hideSummer = function () {
  const sumRow = document.getElementById("summerRow");
  let sumRowDisp = window.getComputedStyle(sumRow);
  if (sumRowDisp.display !== "none") {
    sumRow.style.display = "none";
  } else {
    sumRow.style.display = "flex";
  }
};

linkSaldi.addEventListener("click", hideS);
linkSummer.addEventListener("click", hideSummer);
