// Get and Set the data

// let comics;

// let retrievedData = JSON.parse(localStorage.getItem("comicsData"));

// if (!retrievedData) {
//   comics = comicsData;
//   setData(comicsData);
// } else {
//   comics = retrievedData;
// }

// Render The Comic

const renderComic = (index) => {
    console.log('d  ',index);
  $(".title").append(`<p> ${comicsData[index]["title"]} </p>`);
};

renderComic();
