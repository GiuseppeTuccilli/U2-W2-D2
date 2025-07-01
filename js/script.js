const linkSaldi = document.getElementById("hideSaldi");
const linkSummer = document.getElementById("linkSummer");

const buttons = document.querySelectorAll("main button, footer button");
const linkButtons = document.querySelectorAll(".btn-info");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.fontWeight = "bold";
}

for (let i = 0; i < linkButtons.length; i++) {
  linkButtons[i].style.fontWeight = "bold";
}

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

const navLinks = document.querySelectorAll("nav li a");

navLinks[1].addEventListener("click", () => {
  const SaldiDiv = document.getElementById("SaldiCont");
  SaldiDiv.scrollIntoView();
});

navLinks[2].addEventListener("click", () => {
  const SaldiDiv = document.getElementById("SummerCont");
  SaldiDiv.scrollIntoView();
});

navLinks[3].addEventListener("click", () => {
  const SaldiDiv = document.getElementById("MinuteCont");
  SaldiDiv.scrollIntoView();
});

navLinks[4].addEventListener("click", () => {
  const SaldiDiv = document.getElementById("RecenCont");
  SaldiDiv.scrollIntoView();
});
