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

// Load More Function

let currentItems = 8;

const loadMore = (event) => {
  const elementList = [...document.querySelectorAll(".cards .card")];
  for (let i = currentItems; i < currentItems + 4; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
  }
  currentItems += 4;

  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
};

// Render Comic Card Function

const renderCard = (comic) => {
  $("main").hide();
  $(".cardDesc").show();
  $(".cardDesc").append(`
  <div class="continer">
  <div class="row">
  <div class="col-xxl-3" id='comicData'>
      <img id="descImage" src="${comic["img"]}" alt="${comic["title"]}">
      <div id="rating">
        <img id="starImage" src="./style/img/star2.png" alt="starImage">
        <p> ${comic["rating"]} </p>
      </div>
      <div>
       <button id="addToReadingListButton"> ${
         comic["inReadingList"]
           ? "Remove From Reading List"
           : "+ Add To Reading List"
       }</button>
      </div>
  </div>
  <div class="col-xxl-9">
    <div id="comicDesc">
      <p> ${comic["desc"]} </p>
    </div>
  </div>
  </div>
  </div>`);
  $("#addToReadingListButton").click(() => {
    addToReadingList(comic);
  });
};

// Render Comics Cards Function

const renderCards = (dataArray) => {
  $(".cards").html("");
  //   if (dataArray.length <= 8) {
  //     $("#loadMore").hide();
  //     console.log("less");
  //   } else {
  //     $("#loadMore").show();
  //     $("#loadMore").click(loadMore);
  //     console.log("more");
  //   }
  dataArray.forEach((comic, index) => {
    $(".cards").append(
      `<div class="card" id="card${index}"> <img src='${comic["img"]}' /> <div class="imageText"> Centered </div> </div>`
    );
    $(`#card${index}`).click(() => {
      renderCard(comic);
    });
  });
  setData(comics);
};

renderCards(comics);
$("#loadMore").click(loadMore);

// Search Function

const searchInData = () => {
  const value = $("#searchQueryInput").val().toLowerCase();
  if (filterValue != "All") {
    const searchComics = comics.filter((comic) => {
      const comicTitle = comic["title"].toLowerCase();
      if (comicTitle.includes(value) && comic["type"] == filterValue) {
        return comic;
      }
    });
    renderCards(searchComics);
  } else {
    const searchComics = comics.filter((comic) => {
      const comicTitle = comic["title"].toLowerCase();
      if (comicTitle.includes(value)) {
        return comic;
      }
    });
    renderCards(searchComics);
  }
};

// Filter Function

let filterValue = "All";

$(".filterOptions").click((event) => {
  filterValue = $(`#${event.target.id}`).val();
  filterTheData(filterValue);
});

const filterTheData = () => {
  let filteredComics = [];
  if (filterValue != "All") {
    comics.forEach((comic) => {
      if (comic["type"] == filterValue) {
        filteredComics.push(comic);
      }
    });
    renderCards(filteredComics);
  } else {
    renderCards(comics);
  }
};

// Add To Reading List Function

const addToReadingList = (comic) => {
  if (comic["inReadingList"] == true) {
    comic["inReadingList"] = false;
    $("#addToReadingListButton").html("+ Add To Reading List");
  } else {
    comic["inReadingList"] = true;
    $("#addToReadingListButton").html("Remove From Reading List");
  }
  console.log(comic);
  setData(comics);
};

//

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
