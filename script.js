const ADVICE_SLIP_API = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice-id-link");
const adviceText = document.querySelector(".advice-text-link");
const generateButton = document.querySelector(".generate-button");
const generateButtonImage = document.querySelector(".generate-button img");

// Toggle rotate animation on dice image
function rotate() {
  generateButtonImage.className = "box";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".box").className = "box rotate";
    });
  });
}

// Retrive API data and post to container
async function fetchAdvice() {
  try {
    let response = await fetch(ADVICE_SLIP_API);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderAdvice() {
  let data = await fetchAdvice();
  adviceId.innerHTML = data.slip.id;
  adviceText.innerHTML = data.slip.advice;
  toggleRotate();
}

//Generate random advice on button click and add animation
generateButton.addEventListener("click", renderAdvice);
generateButton.addEventListener("click", rotate, false);
