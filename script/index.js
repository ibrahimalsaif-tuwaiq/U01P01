// Set Data Function

const setData = (data) => {
  const storedData = JSON.stringify(data);
  localStorage.setItem("comicsData", storedData);
};

// Get and Set the data

let comics;

let retrievedData = JSON.parse(localStorage.getItem("comicsData"));

if (!retrievedData) {
  comics = comicsData;
  setData(comicsData);
} else {
  comics = retrievedData;
}

// Render Comics Cards Function

const renderCards = (newComics = null) => {
  $(".cards").html("");
  if (newComics == null) {
    comicsData.forEach((comic, index) => {
      $(".cards").append(
        `<div class="card" onclick="renderComic(${index})"> <a href="./description.html"> <img src='${comic["img"]}' /> </a></div>`
      );
    });
  } else {
    newComics.forEach((comic, index) => {
      $(".cards").append(
        `<div class="card${index}"> <img src='${comic["img"]}' /> </div>`
      );
    });
  }
  setData(comicsData);
};

renderCards();

// Search Function

const searchInData = () => {
  const value = ($("#searchQueryInput").val()).toLowerCase();
  const searchComics = comics.filter((comic) => {
    const comicTitle = comic["title"].toLowerCase();
    return comicTitle.includes(value);
  });
  renderCards(searchComics);
};

// Filter Function

const filterTheData = () => {
  const value = $("#filterChoices").val();
  let filteredComics = [];
  value.forEach((universe) => {
    comics.forEach((comic) => {
      if (comic["type"] == universe) {
        filteredComics.push(comic);
      }
    });
  });
  renderCards(filteredComics);
};