const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  console.log("On Title Click");
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is Here!";
}

function handleMouseOver() {
  title.innerText = "Mouse is Gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseOver);
