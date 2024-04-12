let value = 0;
document.querySelector(".score").textContent = value;

let increaseButton = function () {
  value++;
  document.querySelector(".score").value = value;
  document.querySelector(".score").textContent = value;
};

let decreaseButton = function () {
  value--;
  document.querySelector(".score").value = value;
  document.querySelector(".score").textContent = value;
};
