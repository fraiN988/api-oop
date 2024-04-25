const movieForm = document.getElementById("movieForm");
const movieInfo = document.getElementById("movieInfo");

movieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const movieTitle = document.getElementById("movieTitle").value.trim();

  const apiKey = "401b0a60";
  const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "False") {
        movieInfo.innerHTML = `<h2>${data.Error}</h2>`;
      } else {
        const title = data.Title;
        const year = data.Year;
        const plot = data.Plot;
        const poster = data.Poster;

        movieInfo.innerHTML = `
          <h2>${title} (${year})</h2>
          <img src="${poster}" alt="${title} poster">
        `;
      }
    })
    .catch((error) => {
      console.error(error);
      movieInfo.innerHTML = "<h2>Error: An error occurred.</h2>";
    });
});

movieForm.addEventListener("submit", (event) => {
  const movieTitle = document.getElementById("movieTitle").value.trim();

  if (movieTitle === "") {
    alert("Please enter a movie title");
    event.preventDefault();
  }
});
