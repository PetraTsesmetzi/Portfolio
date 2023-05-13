"use strict";
console.log("height: " + window.innerHeight);
console.log("width: " + window.innerWidth);

/*************GALLERY PROJECT-CARD************/
/*getting the gallary-projectcard description*/
/*you can click on a project and a despription from the project slides in*/
const btn_project = document.getElementsByName("box");

btn_project.forEach((element) => {
  element.addEventListener("click", function () {
    element.parentNode.parentNode.classList.add("description-open");
    element.parentNode.parentNode.setAttribute(
      "value",
      element.getAttribute("value")
    );
    console.log(element.parentNode.parentNode);
    remvoveProjectOverview(element.parentNode.parentNode);
  });
});

/**removes the project description slider */
function remvoveProjectOverview(grandparentNode) {
  console.log(grandparentNode.getAttribute("value"));
  let i = grandparentNode.getAttribute("value");
  const btn_close = document.getElementById("btn-close-" + i);
  btn_close.addEventListener("click", function () {
    grandparentNode.classList.remove("description-open");
  });
}

/******************MOBILE NAVIGATION****************/
const btn_nav_menu = document.querySelector("#btn-mobile");
const container = document.querySelector(".container");
btn_nav_menu.addEventListener("click", function (e) {
  // e.parentNode.parentNode.classList.add("mobile-nav-open");
  container.classList.toggle("mobile-nav-open");
  console.log(e);
});
