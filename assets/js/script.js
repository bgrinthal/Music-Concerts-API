// variables
// add api key here Spotify api
var apiKey = "9473e5cba5msh74e0809a1e4e6cfp166f95jsnf68009c0712b";

var testContainer = document.getElementById("spotify");

function start() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  fetch(
    "https://spotify23.p.rapidapi.com/charts/?type=regional&country=us&recurrence=daily&date=latest",
    options
  )
    .then((response) => response.json())
    .then((response) => {
        for (var i = 0; i < 10; i++) {
            // console.log the results from the fetch
            console.log(response.content[i])

            // created variables for the artist name, song name.
            var song = response.content[i];
            
            var songName = song.track_title;
            var artistName = song.artists[0];

            var div = document.createElement("div");

            // created a variable for the image
            var img = document.createElement("img");
            img.setAttribute("src", song.thumbnail);

            // created a variable for the text
            var p = document.createElement("p");
            p.textContent = songName + " by " + artistName;

            var a = document.createElement("a");
            a.setAttribute("href", song.track_url);
            a.textContent = "Listen Here";

            // appended the text to the div
            div.append(img, p, a);

            testContainer.append(div);
        }
    })
    .catch((err) => console.error(err));
}

start();