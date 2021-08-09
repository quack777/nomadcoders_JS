//css에서 클래스이름 clicked를 만들어서 색깔속성을 넣어주고 js에서 그 클래스이름을 넣었다 빼면서 색깔속성을 넣었다가 뺄 수 있게 함
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);