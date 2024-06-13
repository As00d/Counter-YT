let value = 0;
document.querySelector(".score").textContent = value;
const currentScore = document.querySelector(".score");

const updateScore = function (value) {
  currentScore.value = value;
  currentScore.textContent = value;
};

const increaseButton = document.querySelector(".increase");
increaseButton.addEventListener("click", function () {
  value++;
  updateScore(value);
});

const decreaseButton = document.querySelector(".decrease");
decreaseButton.addEventListener("click", function () {
  if (value === 1 || value === 0) {
    alert("Value cannot be further decreased");
  } else {
    value--;
    updateScore(value);
  }
});

const reset = function () {
  value = 0;
  updateScore(value);
};
