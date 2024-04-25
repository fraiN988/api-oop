const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  const keyword = document.getElementById("search-keyword").value;
  printSearchResults(keyword);
});

printRandomArtworks();

async function printSearchResults(keyword, limit = 10) {
  const url = "https://openaccess-api.clevelandart.org/api/artworks";
  const params = {
    q: keyword,
    skip: 0,
    limit,
    has_image: 1,
  };

  try {
    const response = await axios.get(url, { params });
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    for (const artwork of response.data.data) {
      const title = artwork.title || "Untitled";
      const creators = artwork.creators?.display_name || "Unknown Artist";
      const creation_date = artwork.creation_date;
      const image = artwork.images.web.url;

      const resultElement = document.createElement("div");
      resultElement.classList.add("result");
      resultElement.innerHTML = `
                    <img src="${image}" alt="${title}">
                    <h1>${title}</h1>
                    <h2>${creators}</h2>
                    <h2>${creation_date}</h2>
                `;

      resultsContainer.appendChild(resultElement);
    }
  } catch (error) {
    console.error("ERROR getting artwork data:", error);
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML =
      "<h2>Error: An error occurred fetching data.</h2>";
  }
}

async function printRandomArtworks(limit = 12) {
  const url = "https://openaccess-api.clevelandart.org/api/artworks";
  const params = {
    has_image: 1,
  };

  try {
    const response = await axios.get(url, { params });
    const randomArtworksContainer = document.getElementById("random-artworks");

    response.data.data.sort(() => Math.random() - 0.5);

    for (let i = 0; i < limit; i++) {
      const artwork = response.data.data[i];
      const title = artwork.title || "Untitled";
      const creators = artwork.creators?.display_name || "Unknown Artist";
      const creation_date = artwork.creation_date;
      const image = artwork.images.web.url;

      const artworkElement = document.createElement("div");
      artworkElement.classList.add("artwork");
      artworkElement.innerHTML = `
                    <img src="${image}" alt="${title}">
                    <h1>${title}</h1>
                    <h2>${creators}</h2> 
                    <h2>${creation_date}</h2>
                `;

      randomArtworksContainer.appendChild(artworkElement);
    }
  } catch (error) {
    console.error("ERROR getting artwork data:", error);
    const randomArtworksContainer = document.getElementById("random-artworks");
    randomArtworksContainer.innerHTML =
      "<h2>Error: An error occurred fetching data.</h2>";
  }
}
