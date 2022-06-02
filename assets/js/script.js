// variables
// add api key here Spotify api
// var apiKey = "9473e5cba5msh74e0809a1e4e6cfp166f95jsnf68009c0712b";
var apiKey = "deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8";
// var apiKeyKk = "e39f34ac20msh1b788198a77aac4p1f6b56jsnf6ae5a296344";

var spotifyContainer = document.getElementById("spotify");
var billboardDiv = document.getElementById("billboard");

// function start() {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//       "X-RapidAPI-Key": apiKey,
//     },
//   };

//   fetch(
//     "https://spotify23.p.rapidapi.com/charts/?type=regional&country=us&recurrence=daily&date=latest",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//         for (var i = 0; i < 10; i++) {
//             // console.log the results from the fetch
//             console.log(response.content[i])

//             // created variables for the artist name, song name.
//             var position = response.content[i];
//             var song = response.content[i];
//             var ranking = position.position;
//             var songName = song.track_title;
//             var artistName = song.artists[0];

//             var div = document.createElement("div");

//             // created a variable for the image
//             var img = document.createElement("img");
//             img.setAttribute("src", song.thumbnail);
    

//             // created a variable for the text
//             var p = document.createElement("p");
//             p.textContent = ranking + ". " + songName + " by " + artistName;

//             var a = document.createElement("a");
//             a.setAttribute("href", song.track_url);
//             a.textContent = "Listen Here";

//             // appended the text to the div
//             div.append(p, img, a);

//             spotifyContainer.append(div);
//         }
//     })
//     .catch((err) => console.error(err));
// }


// function getPastCities () {
//     var past = JSON.parse(localStorage.getItem("pastCities"))|| [];
//     console.log(past);
//     past.forEach(function (){
//         var locations = document.getElementsByClassName("locations");
//         let btn = document.createElement("button");
//         btn.innerHTML = past;
//         document.body.appendChild(btn);
//     }) 
// }

// getPastCities();

function ticketMaster() {

// // to grab from search box
// // var artistName = document.querySelector('#search-input').value; 

// // to test code
var artistName = "harrystyles"

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





//BILLBOARD
function renderBillboard(artists) {
  var div1 = document.createElement('div');
  var rank1 = document.createElement('h2');
  var title1 = document.createElement('h2');
  var artist1 = document.createElement('h3');
  var image1 = document.createElement('img');
  title1.textContent = artists[1].title;
  rank1.textContent = artists[1].rank;
  artist1.textContent = artists[1].artist;
  image1.src = artists[1].image;
  div1.append(rank1, title1, artist1, image1);
  billboardDiv.append(div1);
  
  var div2 = document.createElement('div');
  var rank2 = document.createElement('h2');
  var title2 = document.createElement('h2');
  var artist2 = document.createElement('h3');
  var image2 = document.createElement('img');
  title2.textContent = artists[2].title;
  rank2.textContent = artists[2].rank;
  artist2.textContent = artists[2].artist;
  image2.src = artists[2].image;
  div1.append(rank2, title2, artist2, image2);
  billboardDiv.append(div2);

  var div3 = document.createElement('div');
  var rank3 = document.createElement('h2');
  var title3 = document.createElement('h2');
  var artist3 = document.createElement('h3');
  var image3 = document.createElement('img');
  title3.textContent = artists[3].title;
  rank3.textContent = artists[3].rank;
  artist3.textContent = artists[3].artist;
  image3.src = artists[3].image;
  div3.append(rank3, title3, artist3, image3);
  billboardDiv.append(div3);

  var div4 = document.createElement('div');
  var rank4 = document.createElement('h2');
  var title4 = document.createElement('h2');
  var artist4 = document.createElement('h3');
  var image4 = document.createElement('img');
  title4.textContent = artists[4].title;
  rank4.textContent = artists[4].rank;
  artist4.textContent = artists[4].artist;
  image4.src = artists[4].image;
  div4.append(rank4, title4, artist4, image4);
  billboardDiv.append(div4);

  var div5 = document.createElement('div');
  var rank5 = document.createElement('h2');
  var title5 = document.createElement('h2');
  var artist5 = document.createElement('h3');
  var image5 = document.createElement('img');
  title5.textContent = artists[5].title;
  rank5.textContent = artists[5].rank;
  artist5.textContent = artists[5].artist;
  image5.src = artists[5].image;
  div5.append(rank5, title5, artist5, image5);
  billboardDiv.append(div5);

  var div6 = document.createElement('div');
  var rank6 = document.createElement('h2');
  var title6 = document.createElement('h2');
  var artist6 = document.createElement('h3');
  var image6 = document.createElement('img');
  title6.textContent = artists[6].title;
  rank6.textContent = artists[6].rank;
  artist6.textContent = artists[6].artist;
  image6.src = artists[6].image;
  div6.append(rank6, title6, artist6, image6);
  billboardDiv.append(div6);

  var div7 = document.createElement('div');
  var rank7 = document.createElement('h2');
  var title7 = document.createElement('h2');
  var artist7 = document.createElement('h3');
  var image7 = document.createElement('img');
  title7.textContent = artists[7].title;
  rank7.textContent = artists[7].rank;
  artist7.textContent = artists[7].artist;
  image7.src = artists[7].image;
  div7.append(rank7, title7, artist7, image7);
  billboardDiv.append(div7);

  var div8 = document.createElement('div');
  var rank8 = document.createElement('h2');
  var title8 = document.createElement('h2');
  var artist8 = document.createElement('h3');
  var image8 = document.createElement('img');
  title8.textContent = artists[8].title;
  rank8.textContent = artists[8].rank;
  artist8.textContent = artists[8].artist;
  image8.src = artists[8].image;
  div8.append(rank8, title8, artist8, image8);
  billboardDiv.append(div8);

  var div9 = document.createElement('div');
  var rank9 = document.createElement('h2');
  var title9 = document.createElement('h2');
  var artist9 = document.createElement('h3');
  var image9 = document.createElement('img');
  title9.textContent = artists[9].title;
  rank9.textContent = artists[9].rank;
  artist9.textContent = artists[9].artist;
  image9.src = artists[9].image;
  div9.append(rank9, title9, artist9, image9);
  billboardDiv.append(div9);

  var div10 = document.createElement('div');
  var rank10 = document.createElement('h2');
  var title10 = document.createElement('h2');
  var artist10 = document.createElement('h3');
  var image10 = document.createElement('img');
  title10.textContent = artists[10].title;
  rank10.textContent = artists[10].rank;
  artist10.textContent = artists[10].artist;
  image10.src = artists[10].image;
  
  div10.append(rank10, title10, artist10, image10);
  billboardDiv.append(div10);

}
  const billboardOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com',
      'X-RapidAPI-Key': 'e39f34ac20msh1b788198a77aac4p1f6b56jsnf6ae5a296344'
    }
  };
  
  fetch('https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2019-05-11', options)
    .then(response => response.json())
    .then(response => {
      // console.log(response)
      renderBillboard(response.content);
      
    
    
    }) .catch(err => console.error(err));


  
    
    
    
    
    
    
  



billboard();
// start();
ticketMaster();