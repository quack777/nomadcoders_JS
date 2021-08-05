const title = document.querySelector("div.hello:fist-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

/* 밑에 문장은 위에 addEventListener이랑 똑같음
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;*/