const inputYear = document.querySelector("#birth");
const inputName = document.querySelector("#name");

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const inputDateBirth = inputYear.value.split("-")[0];
  const nameValue = inputName.value;

  if (!inputDateBirth || !nameValue) {
    document.querySelector(
      ".output"
    ).innerHTML = `<p> Hey! field can not balnk.</p>`;
  } else if (inputDateBirth % 4 === 0) {
    document.querySelector(".output").innerHTML = `<p> Wow! <Strong>${nameValue}</strong> You are bron in leap year. </p>`;
  } else {
    document.querySelector(
      ".output"
    ).innerHTML = `<p>Sorry! This is a not leap year...</p>`;
  }
});
