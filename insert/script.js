import { insertData } from "../utils/fetch.js";
import { validateInput } from "../utils/validation.js";

const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const descriptionInput = document.getElementById("descriptionInput");
const imgInput = document.getElementById("imgInput");
const locationInput = document.getElementById("locationInput");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("success-msg");

submitBtn.addEventListener("click", async () => {
  const data = {
    name: nameInput.value,
    price: priceInput.value,
    description: descriptionInput.value,
    imgUrl: imgInput.value,
    location: locationInput.value,
  };

  if (validateInput(data)) {
    console.log("Incorrect input");
    return;
  }

  await insertData(data);

  successMsg.textContent = "Board added successfully.";

  setTimeout(() => {
    document.location.href = "../index.html";
  }, 3000);
});
