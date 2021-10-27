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

// Add New Comic Function

const addNewComic = () => {
  comics.push({
    title: $("#comicTitle").val(),
    img: $("#comicImage").val(),
    desc: $("#comicDescription").val(),
    inReadingList: false,
    type: $("#comicOption").val(),
    rating: { rate: "no rating yet", total: 0 },
    comicLink: $("#comicLink").val()
  });
  setData(comics);
};

$("#addButton").click(addNewComic);
