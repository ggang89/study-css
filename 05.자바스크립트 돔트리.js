document.addEventListener("DOMContentLoaded", () => {
  // body전에 script를 연결해주려면 써야함
  //dom콘텐트가 다 load된 후 스크립트를 실행하라는 것

  let button = document.querySelector("button");
  button.addEventListener("click", function () {
    alert("hello");
  });
});
