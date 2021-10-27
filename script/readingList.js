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

// Remove From Reading List

const removeFromReadingList = (comic) => {
  comic['inReadingList'] = false;
  renderReadingListCards(comics);
}

// Render Reading List Comic Card Function

const renderReadingListCards = (dataArray) => {
  $(".cards").html("");
  dataArray.forEach((comic, index) => {
    if (comic["inReadingList"] == true) {
      $(".cards").append(
        `<div class="card" id="card${index}">
        <div class="content-overlay"></div>
        <img class="content-image" src='${comic["img"]}' />
        <div class="content-details fadeIn-bottom">
            <h3 class="content-title">${comic["title"]}</h3>
            <button class="removeFromList" id="removeFromList${index}" type="button"><i class="fas fa-trash"></i> Remove From Reading List </button>
        </div>
       </div>`
      );
    }
    $(`#removeFromList${index}`).click(() => {
      removeFromReadingList(comic);
    });
  });
  $(".card").slice(0, 4).show();
  if (dataArray.length > 4) {
    $("#loadMore").show();
  } else {
    $("#loadMore").hide();
  }
  $("#loadMore").click(loadMore);
  setData(comics);
};

// Start The Page

renderReadingListCards(comics);
