const $circle = document.querySelector("#circle");
const $score = document.querySelector("#score");

function start() {
  setScore(getScore());
  setImage();
}

function setScore(score) {
  localStorage.setItem("score", score);
  $score.textContent = score;
}

function getScore() {
  return Number(localStorage.getItem("score")) ?? 0;
}

function setImage() {
  if (getScore() >= 5 && getScore() < 25) {
    $circle.src = "./assets/image2.png";
  } else if (getScore() >= 25 && getScore() < 50) {
    $circle.src = "./assets/image3.png";
  } else if (getScore() >= 50 && getScore() < 75) {
    $circle.src = "./assets/image4.png";
  } else if (getScore() >= 75 && getScore() < 100) {
    $circle.src = "./assets/image5.png";
  } else if (getScore() >= 100 && getScore() < 125) {
    $circle.src = "./assets/image6.png";
  } else if (getScore() >= 125 && getScore() < 200) {
    $circle.src = "./assets/image7.png";
  } else if (getScore() >= 200 && getScore() < 400) {
    $circle.src = "./assets/image8.png";
  } else if (getScore() >= 400 && getScore() < 500) {
    $circle.src = "./assets/image9.png";
  } else if (getScore() >= 500 && getScore() < 750) {
    $circle.src = "./assets/image10.png";
  } else if (getScore() >= 750 && getScore() < 1300) {
    $circle.src = "./assets/image11.png";
  } else if (getScore() >= 1300 && getScore() < 5000) {
    $circle.src = "./assets/image12.png";
  } else if (getScore() >= 5000) {
    $circle.src = "./assets/image13.png";
  }
}

function addOne() {
  setScore(getScore() + 1);
  setImage();
}

$circle.addEventListener("click", (e) => {
  const rect = $circle.getBoundingClientRect();

  const offsetX = e.clientX - rect.left - rect.width / 2;
  const offsetY = e.clientY - rect.top - rect.height / 2;

  const DEG = 55;

  const tiltX = (offsetY / rect.height) * DEG;
  const tiltY = (offsetX / rect.width) * -DEG;

  $circle.style.setProperty("--tiltX", `${tiltX}deg`);
  $circle.style.setProperty("--tiltY", `${tiltY}deg`);

  setTimeout(() => {
    $circle.style.setProperty("--tiltX", `0deg`);
    $circle.style.setProperty("--tiltY", `0deg`);
  }, 300);

  const plusOne = document.createElement("div");
  plusOne.classList.add("plus-one");
  plusOne.textContent = "+1";
  plusOne.style.left = `${e.clientX - rect.left}px`;
  plusOne.style.top = `${e.clientY - rect.top}px`;

  $circle.parentElement.appendChild(plusOne);

  addOne();

  setTimeout(() => {
    plusOne.remove();
  }, 1000);
});

start();
