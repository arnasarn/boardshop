const productsWrapper = document.getElementById("products-wrapper");

const displayProducts = (products) => {
  [...products]
    .sort((a, b) => a.price - b.price)
    .forEach((product) => {
      const card = document.createElement("a");
      card.href = `./product/index.html?id=${product.id}`;
      card.classList.add("card");

      const cardTitle = document.createElement("h3");
      cardTitle.textContent = product.name;
      const cardPrice = document.createElement("h3");
      cardPrice.textContent = product.price;
      const cardImg = document.createElement("img");
      cardImg.src = product.imgUrl;

      card.append(cardTitle);
      card.append(cardPrice);
      card.append(cardImg);

      productsWrapper.append(card);
    });
};

const fetchProducts = async () => {
  const response = await fetch(
    "https://68073abde81df7060eb9499e.mockapi.io/boards"
  );
  const data = await response.json();
  return data;
};

const initProducts = async () => {
  const products = await fetchProducts();
  displayProducts(products);
};

initProducts();
