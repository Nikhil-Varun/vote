// https://www.youtube.com/embed/y_PhWklB40g?si=ysNT1ekmcpowmYt7
// https://www.youtube.com/embed/xcR9wBQIzmI?si=OwAXyslisefAdPda

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("voteForm")
    .addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  // Get the input values

  let monitor = document.getElementById("monitor").value;

  let total = parseInt(document.querySelector("#total").innerHTML);
  let total1 = parseInt(document.querySelector("#total1").innerHTML);
  let total2 = parseInt(document.querySelector("#total2").innerHTML);
  let total3 = parseInt(document.querySelector("#total3").innerHTML);

  if (monitor == "Suresh") total1++;
  else if (monitor == "Deepank") total2++;
  else total3++;

  total1.innerHTML = parseInt(total1);
  total2.innerHTML = parseInt(total2);
  total3.innerHTML = parseInt(total3);
  total.innerHTML = parseInt(total);

  total = total1 + total2 + total3;
}
