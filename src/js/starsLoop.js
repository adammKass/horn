const containers = document.querySelectorAll(".star-container");
const starCount = 5;

containers.forEach((div) => {
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("img");
    star.src = "../public/svg/star.svg";
    star.alt = "Hodnotenie";
    star.classList.add("w-4", "h-4");
    div.appendChild(star);
  }
});
