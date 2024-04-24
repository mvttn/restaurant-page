import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
import "./styles/style.css";

const content = document.querySelector("#content");

home();
console.log("Hello this your restaurant");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  homeBtn.classList.add("selected");
  menuBtn.classList.remove("selected");
  aboutBtn.classList.remove("selected");
  home();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  menuBtn.classList.add("selected");
  homeBtn.classList.remove("selected");
  aboutBtn.classList.remove("selected");
  menu();
});

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  aboutBtn.classList.add("selected");
  homeBtn.classList.remove("selected");
  menuBtn.classList.remove("selected");
  about();
});

export { content };
