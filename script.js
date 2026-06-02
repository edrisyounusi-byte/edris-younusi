const textElement = document.querySelector("header p");
const phrases = [
  "محصل و پژوهش گر حوزه امنیت سایبری شبکه",
  "علاقه مند به تست نفوذ و هک قانون مند(pentesting)",
  "درحال یادگیری مکانیرم های دفاعی شبکه",
];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrase[phraseIndex];
  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
  } else {
    textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
  }
  let typeSpeed = isDeleting ? 30 : 60;
  if (!isDeleting && characterIndex === currentPhrase.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }
  setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
