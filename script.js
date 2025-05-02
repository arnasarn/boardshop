import { fetchProducts } from "./utils/fetch.js";

const productsWrapper = document.getElementById("products-wrapper");

const displayProducts = (products) => {
  [...products]
    .sort((a, b) => a.price - b.price)
    .forEach((product) => {
      const card = document.createElement("a");
      card.href = `./product/index.html?id=${product.id}`;
      card.classList.add("card");

      const cardImg = document.createElement("div");
      cardImg.classList.add("card-image");
      cardImg.style.backgroundImage = `url(${product.imgUrl})`;

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      const cardTitle = document.createElement("h3");
      cardTitle.textContent = product.name;
      const cardPrice = document.createElement("h3");
      cardPrice.textContent = `${product.price}$`;

      cardContent.append(cardTitle);
      cardContent.append(cardPrice);

      card.append(cardImg);
      card.append(cardContent);

      productsWrapper.append(card);
    });
};

const initProducts = async () => {
  const products = await fetchProducts();
  displayProducts(products);
};

initProducts();
