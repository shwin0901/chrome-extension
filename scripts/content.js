console.log("https://www.v2ex.com");

const button = document.createElement("button");
button.textContent = "返回顶部";
button.classList.add("to-Button-extensions");

document.body.appendChild(button);

button.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}