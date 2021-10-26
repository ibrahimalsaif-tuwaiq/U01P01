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

// Render Reading List Comic Card Function

const renderReadingListCards = (dataArray) => {
  $(".cards").html("");
  dataArray.forEach((comic) => {
    if (comic["inReadingList"] == true) {
      $(".cards").append(
        `<div class="card" id="card">
               <img src='${comic["img"]}' /> 
              </div>`
      );
    }
  });
  setData(comics);
};

renderReadingListCards(comics);
