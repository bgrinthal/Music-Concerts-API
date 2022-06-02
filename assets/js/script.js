// variables
// add api key here Spotify api
// var apiKey = "9473e5cba5msh74e0809a1e4e6cfp166f95jsnf68009c0712b";
var apiKey = "deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8";
// var apiKeyKk = "e39f34ac20msh1b788198a77aac4p1f6b56jsnf6ae5a296344";

var spotifyContainer = document.getElementById("spotify");

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
            var position = response.content[i];
            var song = response.content[i];
            var ranking = position.position;
            var songName = song.track_title;
            var artistName = song.artists[0];

            var div = document.createElement("div");

            // created a variable for the image
            var img = document.createElement("img");
            img.setAttribute("src", song.thumbnail);
    

            // created a variable for the text
            var p = document.createElement("p");
            p.textContent = ranking + ". " + songName + " by " + artistName;

            var a = document.createElement("a");
            a.setAttribute("href", song.track_url);
            a.textContent = "Listen Here";

            // appended the text to the div
            div.append(p, img, a);

            spotifyContainer.append(div);
        }
    })
    .catch((err) => console.error(err));
}



function ticketMaster() {

// to grab from search box
// var artistName = document.querySelector('#search-input').value; 

// to test code
var artistName = "harrystyle"

var queryString = "https://app.ticketmaster.com/discovery/v2/attractions.json?countryCode=US&name=" + artistName + "&classificationName=music&apikey=uUGLWbIhHXmBGx7OldzHzYyJPFEnqPud"

  fetch(queryString, {
      cache: 'reload',
  })
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          var nameArtist

      })
}


// billboard top 100 api.  Commented out to not run

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
// 	}
// };

// fetch('https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2019-05-11', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



start();
ticketMaster();