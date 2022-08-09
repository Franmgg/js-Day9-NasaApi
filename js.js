// Con el proposito de que conozcais como pedir una Api key registraros aqui :
// https://api.nasa.gov 
// luego colocar la Api key en la variable Api key

var apiKey = "Apikey"
var url = "https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&count=1";
window.onload = function () {

  fetch(url)
  .then(res => { return res.json(); })
  .then(data => {
   document.getElementById("nasaImg").src = data[0].url
  })
  .catch(err => { console.error(error) })




  document.getElementById("restart").addEventListener("click", function () {
    document.location.reload()
  })
}