// variables
// add api key here Spotify api
var apiKey = "deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8";
var musixKey = "30134de52c4876b8e46fb0bc4deac1f1"
var billBoardKey ='9473e5cba5msh74e0809a1e4e6cfp166f95jsnf68009c0712b'


var testContainer = document.getElementById("test");
var citySearch = document.getElementById('search');
var submtBtn = document.getElementById('searchBtn')

function run(){

  fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&&city="+ citySearch.value + "&size=50&classificationName=music,concert,-theatre,-musical&apikey=ZNUGzsWtaFDTZqTsYFz6uJO63BV2G624").then(function(res){
    return res.json()
  })
  .then(function(res){
    console.log(res._embedded.events)
  })
}
submtBtn.addEventListener('click', run)

