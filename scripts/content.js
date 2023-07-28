console.log("https://www.v2ex.com");

const button = document.createElement("button");
button.textContent = "回到顶部";
button.classList.add("to-Button-extensions");

function isDisplayButton() {
  if (window.scrollY < 200) {
    button.style.opacity = 0;
  } else {
    button.style.opacity = 1;
  }
}

isDisplayButton();

window.onscroll = () => {
  isDisplayButton();
}

button.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
};

document.body.appendChild(button);