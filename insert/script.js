const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const descriptionInput = document.getElementById("descriptionInput");
const imgInput = document.getElementById("imgInput");
const locationInput = document.getElementById("locationInput");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("success-msg");

const insertData = async (data) => {
  const response = await fetch(
    "https://68073abde81df7060eb9499e.mockapi.io/boards",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return response;
};

submitBtn.addEventListener("click", async () => {
  const data = {
    name: nameInput.value,
    price: priceInput.value,
    description: descriptionInput.value,
    imgUrl: imgInput.value,
    location: locationInput.value,
  };

  await insertData(data);

  successMsg.textContent = "Board added successfully.";
});
