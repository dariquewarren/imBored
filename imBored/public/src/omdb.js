var omdbSearchButton = document.getElementById('omdbSubmitForm')
 var omdbInput = document.getElementById('omdbInput')

 var movieDiv = document.getElementById('movieDiv')
var actorsDiv = document.getElementById('actorsDiv')
var boxOfficeDiv = document.getElementById('boxOfficeDiv')
var countryDiv = document.getElementById('countryDiv')
var dvdDiv = document.getElementById('dvdDiv')
var directorDiv = document.getElementById('directorDiv')
var genreDiv =document.getElementById('genreDiv')
var languageDiv =document.getElementById('languageDiv')
var plotDiv =document.getElementById('plotDiv')
var productionDiv =document.getElementById('productionDiv')
var ratingDiv =document.getElementById('ratingDiv')


 omdbSearchButton.addEventListener('submit', (e)=>{
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

     e.preventDefault()
   var omdbAPIKey = '8df53c60'
   var searchterm = omdbInput.value
     fetch(proxyUrl + `http://www.omdbapi.com/?apikey=${omdbAPIKey}&t=${searchterm}`).then((blob)=>blob.json()).then((data)=>{
    

//     var id = Math.floor(Math.random() * data.length)
    console.log(data)
    movieDiv.innerHTML =` Title <br> ${data.Title.toUpperCase()}`
    actorsDiv.innerHTML = `<h5 class="bg-secondary text-white">Actors<br>${data.Actors}</h5>`
    boxOfficeDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.BoxOffice}<h5>`
    countryDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Country}<h5>`
    dvdDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.DVD}<h5>`
    directorDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Director}<h5>`
    genreDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Genre}<h5>`
    languageDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Language}<h5>`
    plotDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Plot}<h5>`
    productionDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Production}<h5>`
    ratingDiv.innerHTML = `<h5 class="bg-secondary text-white">${data.Rated}<h5>`

    /*

*/

       


     })
 })