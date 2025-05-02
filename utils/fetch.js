export const fetchProducts = async () => {
  const response = await fetch(
    "https://68073abde81df7060eb9499e.mockapi.io/boards"
  );
  const data = await response.json();
  return data;
};

export const fetchBoardById = async (id) => {
  const response = await fetch(
    `https://68073abde81df7060eb9499e.mockapi.io/boards/${id}`
  );
  const data = await response.json();
  return data;
};

export const deleteBoard = async (id) => {
  const response = await fetch(
    `https://68073abde81df7060eb9499e.mockapi.io/boards/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
};

export const insertData = async (data) => {
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
