const url = new URL(document.location.href);
const id = url.searchParams.get("id");

const productImg = document.getElementById("product-img");
const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const productLocation = document.getElementById("location");
const deleteBtn = document.getElementById("delete-btn");
const successMsg = document.getElementById("success-msg");

const fetchBoardById = async () => {
  const response = await fetch(
    `https://68073abde81df7060eb9499e.mockapi.io/boards/${id}`
  );
  const data = await response.json();
  return data;
};

const deleteBoard = async () => {
  const response = await fetch(
    `https://68073abde81df7060eb9499e.mockapi.io/boards/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
};

const displayBoard = async () => {
  const board = await fetchBoardById();

  productImg.src = board.imgUrl;
  title.textContent = board.name;
  description.textContent = board.description;
  price.textContent = `${board.price}$`;
  productLocation.textContent = board.location;
};

deleteBtn.addEventListener("click", async () => {
  const response = await deleteBoard();
  if (response.status === 200) successMsg.textContent = "Board deleted!";
});

displayBoard();
