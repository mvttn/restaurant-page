import { content } from "../index";

function home() {
  // Add welcome message
  const homeMessage = document.createElement("h2");
  homeMessage.textContent = "K'S PIZZERIA";
  content.appendChild(homeMessage);

  // Add Order Now button
  const orderNowBtn = document.createElement("button");
  orderNowBtn.textContent = "ORDER NOW";
  orderNowBtn.id = "order-now";
  orderNowBtn.onclick = () => {
    console.log("Order nOw!");
  };
  content.appendChild(orderNowBtn);

  // Add opening hours info
  const openingHours = document.createElement("div");
  openingHours.id = "opening-hours";
  openingHours.innerHTML =
    "<h3>Opening Hours</h3> \
    <p>Monday : CLOSED</p>\
    <p>Tuesday : 3pm - 9pm</p>\
    <p>Wednesday : 3pm - 9pm</p>\
    <p>Thursday : 3pm - 11pm</p>\
    <p>Friday : 3pm - 11pm</p>\
    <p>Saturday : 3pm - 11pm</p>\
    <p>Sunday : 3pm - 11pm</p>";
  content.appendChild(openingHours);
}

export default home;
