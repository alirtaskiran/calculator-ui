let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");

let firstNumber = document.getElementById("firstNumber").value;
let secondNumber = document.getElementById("secondNumber").value;
let result = document.getElementById("result").value;

addition.addEventListener("click", () => {
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let newResult = parseFloat(firstNumber) + parseFloat(secondNumber);
  document.getElementById("result").textContent = "Sonuç: " + newResult.toFixed(3);
});

subtraction.addEventListener("click", () => {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let newResult = parseFloat(firstNumber) - parseFloat(secondNumber);
  document.getElementById("result").textContent = "Sonuç: " + newResult.toFixed(3);
});

multiplication.addEventListener("click", () => {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let newResult = parseFloat(firstNumber) * parseFloat(secondNumber);
  document.getElementById("result").textContent = "Sonuç: " + newResult.toFixed(3);
});

division.addEventListener("click", () => {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let newResult = parseFloat(firstNumber) / parseFloat(secondNumber);;
  document.getElementById("result").textContent = "Sonuç: " + newResult.toFixed(3);
});
