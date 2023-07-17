const answers = [
"Yes",
"No",
"Maybe"
];

const resultElement = document.getElementById("result");
const shakeButton = document.getElementById("shake-button");

function generateAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

function handleShakeButtonClick() {
  if (resultElement && shakeButton) {
    const answer = generateAnswer();
    console.log("Hello World!");
    resultElement.textContent = answer;
  } else {
    console.error("Element not found.");
  }
}

if (shakeButton) {
  shakeButton.addEventListener("click", handleShakeButtonClick);
} else {
  console.error("Button element not found.");
}
