const dogButton = document.getElementById("dogButton");
const dogImage = document.getElementById("dogImage");

dogButton.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        dogImage.src = data.message;
      } else {
        console.error("Error:", data);
      }
    })
    .catch((error) => console.error(error));
});
