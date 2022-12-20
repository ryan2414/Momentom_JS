const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function OnClickTitle() {
  console.log("On Title Click");
  title.style.color = "blue";
}

title.addEventListener("click", OnClickTitle);
