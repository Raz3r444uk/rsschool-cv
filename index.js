const btn = document.querySelector(".project__link1");
btn.onmousemove = function (e) {
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;
  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
};

const btn2 = document.querySelector(".project__link2");
btn2.onmousemove = function (e) {
  const x = e.pageX - btn2.offsetLeft;
  const y = e.pageY - btn2.offsetTop;
  btn2.style.setProperty("--x", x + "px");
  btn2.style.setProperty("--y", y + "px");
};

const btn3 = document.querySelector(".edu__link1");
btn3.onmousemove = function (e) {
  const x = e.pageX - btn3.offsetLeft;
  const y = e.pageY - btn3.offsetTop;
  btn3.style.setProperty("--x", x + "px");
  btn3.style.setProperty("--y", y + "px");
};

const btn4 = document.querySelector(".edu__link2");
btn4.onmousemove = function (e) {
  const x = e.pageX - btn4.offsetLeft;
  const y = e.pageY - btn4.offsetTop;
  btn4.style.setProperty("--x", x + "px");
  btn4.style.setProperty("--y", y + "px");
};

const btn5 = document.querySelector(".edu__link3");
btn5.onmousemove = function (e) {
  const x = e.pageX - btn5.offsetLeft;
  const y = e.pageY - btn5.offsetTop;
  btn5.style.setProperty("--x", x + "px");
  btn5.style.setProperty("--y", y + "px");
};
