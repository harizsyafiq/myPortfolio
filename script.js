// Example of a simple JavaScript function that displays an alert when the form is submitted

window.onload = function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  });
};
