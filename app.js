const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(title);

function handleTitleClick() {
  const clicked = "active";
  if (h1.className === clicked) {
    h1.className = "";
  } else {
    h1.className = clicked;
  }
}

h1.addEventListener("click", handleTitleClick);
