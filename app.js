const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(title);

function handleTitleClick() {
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
