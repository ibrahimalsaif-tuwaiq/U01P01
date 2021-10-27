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

// Navbar Control

const openNav = () => {
  document.getElementById("myNav").style.height = "100%";
};

const closeNav = () => {
  document.getElementById("myNav").style.height = "0%";
};

// Load More Function

const loadMore = (event) => {
  event.preventDefault();
  $(".card:hidden").slice(0, 4).fadeIn("slow");
  if ($(".card:hidden").length == 0) {
    $("#loadMore").fadeOut("slow");
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
      <h2 id="descTitle"> ${comic["title"]} </h2>
      <img id="descImage" src="${comic["img"]}" alt="${comic["title"]}">
      <div id="rating">
        <img id="starImage" src="./style/img/star.png" alt="starImage">
        <p id="ratingScore"> ${comic["rating"]["rate"]} </p>
      </div>
      <div>
       <button id="rateButton" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ratingModal">
       <i class="far fa-star"></i>  Rate
      </button>
      </div>
      <div class="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Rate The Comic Book</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2 id="rateScore"> 0 </h2>
                    <input type="range" class="form-range" value="0" min="0" max="5" id="rateRange">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="rateFunButton" class="btn btn-warning">Rate</button>
                </div>
            </div>
        </div>
      </div>
      <div>
       <button id="addToReadingListButton"> ${
         comic["inReadingList"]
           ? '<i class="fas fa-bookmark"></i> Remove From Reading List'
           : '<i class="far fa-bookmark"></i> Add To Reading List'
       }</button>
      </div>
  </div>
  <div class="col-xxl-9">
    <h2 id="descTitleXXL"> ${comic["title"]} </h2>
    <div id="comicDesc">
      <p> ${comic["desc"]} </p>
      <div id="readButtonCon">
       <button id="readButton" type="button"><i class="fas fa-book-open"></i>  Click To Read</button>
      </div>
    </div>
  </div>
  </div>
  </div>`);
  $("#addToReadingListButton").click(() => {
    addToReadingList(comic);
  });
  $("#rateFunButton").click(() => {
    rateComic(comic);
  });
  $("#rateRange").click(() => {
    $("#rateScore").html($("#rateRange").val());
  });
  $("#readButton").click(() => {
    window.open(`${comic["comicLink"]}`);
  });
};

// Render Comics Cards Function

const renderCards = (dataArray) => {
  $(".cards").html("");
  dataArray.forEach((comic, index) => {
    $(".cards").append(
      `<div class="card" id="card${index}">
        <div class="content-overlay"></div>
        <img class="content-image" src='${comic["img"]}' />
        <div class="content-details fadeIn-bottom">
            <h3 class="content-title">${comic["title"]}</h3>
            <button class="ReadMore" id="ReadMore${index}" type="button"> Click To Read More </button>
        </div>
       </div>`
    );
    $(`#ReadMore${index}`).click(() => {
      renderCard(comic);
    });
  });
  $(".card").slice(0, 8).show();
  if (dataArray.length > 8) {
    $("#loadMore").show();
  } else {
    $("#loadMore").hide();
  }
  $("#loadMore").click(loadMore);
  setData(comics);
};

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
    $("#addToReadingListButton").html(
      '<i class="far fa-bookmark"></i> Add To Reading List'
    );
  } else {
    comic["inReadingList"] = true;
    $("#addToReadingListButton").html(
      '<i class="fas fa-bookmark"></i> Remove From Reading List'
    );
  }
  setData(comics);
};

// Rate Comic Function

const rateComic = (comic) => {
  if (comic["rating"]["rate"] == "no rating yet") {
    comic["rating"]["rate"] = 0;
    const rateValue = $("#rateRange").val();
    const newRate =
      (comic["rating"]["rate"] * comic["rating"]["total"] +
        parseInt(rateValue, 10)) /
      (comic["rating"]["total"] + 1);
    comic["rating"]["rate"] = newRate.toFixed(1);
    comic["rating"]["total"]++;
    $("#ratingScore").html(newRate.toFixed(1));
    $("#ratingModal").modal("hide");
  } else {
    const rateValue = $("#rateRange").val();
    const newRate =
      (comic["rating"]["rate"] * comic["rating"]["total"] +
        parseInt(rateValue, 10)) /
      (comic["rating"]["total"] + 1);
    comic["rating"]["rate"] = newRate.toFixed(1);
    comic["rating"]["total"]++;
    $("#ratingScore").html(newRate.toFixed(1));
    $("#ratingModal").modal("hide");
  }
  setData(comics);
};

// Start Page

renderCards(comics);
