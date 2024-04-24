import { content } from "../index";

function menu() {
  const menuItems = [
    {
      name: "Margherita",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "$21",
    },
    {
      name: "Quattro Stagioni",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "$24",
    },
    {
      name: "Diavola",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "$20",
    },
    {
      name: "Parmigiana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "$19",
    },
    {
      name: "Capricciosa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "$19",
    },
    {
      name: "Prosciutto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "$19",
    },
  ];

  const menu = document.createElement("div");
  menu.id = "menu-section";

  menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-item";
    itemDiv.innerHTML = `
    <h3>${item.name}</h3>\
    <p>${item.description}</p>\
    <h4>${item.price}</h4>\
    <hr>`;
    menu.appendChild(itemDiv);
  });

  content.appendChild(menu);
}

export default menu;
