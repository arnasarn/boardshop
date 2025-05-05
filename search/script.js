import { fetchProducts } from "../utils/fetch.js";

const url = new URL(document.location.href);
const searchText = url.searchParams.get("text");

const searchTitle = document.getElementById("resultTitle");
const productsWrapper = document.getElementById("products-wrapper");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchTitle.textContent = `Search results for ${searchText}`;

const displayProducts = (products) => {
  [...products]
    .sort((a, b) => a.price - b.price)
    .forEach((product) => {
      if (product.name.toLowerCase().includes(searchText)) {
        const card = document.createElement("a");
        card.href = `../product/index.html?id=${product.id}`;
        card.classList.add("card");

        const cardImg = document.createElement("div");
        cardImg.classList.add("card-image");
        cardImg.style.backgroundImage = `url(${product.imgUrl})`;

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const cardTitle = document.createElement("span");
        cardTitle.textContent = product.name;
        const cardPrice = document.createElement("span");
        cardPrice.textContent = `${product.price}$`;

        cardContent.append(cardTitle);
        cardContent.append(cardPrice);

        card.append(cardImg);
        card.append(cardContent);

        //mouse-over effect
        card.addEventListener("mouseover", () => {
          cardImg.classList.add("card-image-hovered");
        });

        card.addEventListener("mouseout", () => {
          cardImg.classList.remove("card-image-hovered");
        });

        productsWrapper.append(card);
      }
    });
};

searchBtn.addEventListener("click", () => {
  if (searchInput.value > 255) {
    console.log("Search is too long");
    return;
  }
  window.location.href = `./search/index.html?text=${searchInput.value}`;
});

const initProducts = async () => {
  const products = await fetchProducts();
  displayProducts(products);
};

initProducts();
