import { fetchBoardById, deleteBoard } from "../utils/fetch.js";

const url = new URL(document.location.href);
const id = url.searchParams.get("id");

const productImg = document.getElementById("product-img");
const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const productLocation = document.getElementById("location");
const deleteBtn = document.getElementById("delete-btn");
const successMsg = document.getElementById("success-msg");

const displayBoard = async () => {
  const board = await fetchBoardById(id);

  productImg.src = board.imgUrl;
  title.textContent = board.name;
  description.textContent = board.description;
  price.textContent = `${board.price}$`;
  productLocation.textContent = board.location;
};

deleteBtn.addEventListener("click", async () => {
  const response = await deleteBoard(id);
  if (response.status === 200) successMsg.textContent = "Board deleted!";
  setTimeout(() => {
    document.location.href = "../index.html";
  }, 3000);
});

displayBoard();
