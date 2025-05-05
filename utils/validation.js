export const validateInput = (data) => {
  let isError = false;

  if (
    !data.name ||
    !data.price ||
    !data.description ||
    !data.imgUrl ||
    !data.location
  ) {
    console.log("Please enter all of the data.");
    isError = true;
  }

  if (isNaN(data.price)) {
    console.log("Price must be a number");
    isError = true;
  }

  const correctUrlRegex =
    /http(s)?:\/\/[A-Za-z0-9]+(\.[A-Za-z0-9]+)+\/[-_A-Za-z0-9/]+\.(png|webp|jpg|bmp)$/i;

  const isCorrectUrl = correctUrlRegex.test(data.imgUrl);

  if (!isCorrectUrl) {
    console.log("Please enter image URL in a proper format.");
    isError = true;
  }

  return isError;
};
