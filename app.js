const inputYear = document.querySelector("input");

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const inputYearValue = Number(inputYear.value);

  if (!inputYearValue) {
    document.querySelector(".output").innerHTML = `<h3>Can not blank..</h3>`;
  } else if (inputYearValue % 4 === 0) {
    document.querySelector(".output").innerHTML = `<img src="1.webp" alt="">`;
  } else {
    document.querySelector(
      ".output"
    ).innerHTML = `<h3>Sorry! This is a not leap year...</h3>`;
  }
});
