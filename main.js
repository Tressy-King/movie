let title = document.getElementById("title")
let description = document.getElementById("description")
let year = document.getElementById("year")
let category = document.getElementById('category')
let url = document.getElementById('url')
let content = document.getElementById('content')
let rate = document.getElementById('rate')
let bottom = document.getElementById("image-container")
let load = document.getElementById('loader-btn')

let submit = document.getElementById("submit")



let movies = []

function addMovie() {
    let movie = {
        title: title.value,
        description: description.value,
        year: year.value,
        category: category.value,
        url: url.value,
        content: content.value,
        rate: rate.value
    }

movies.push(movie)
console.log(movies)
getMovie()
}



function getMovie(){
    
    let images 
   
    movies.forEach(function(movie){
        images = document.createElement("img"),
        images.setAttribute("src", movie.url)
    })
    bottom.appendChild(images)
}

submit.addEventListener ('click',addMovie)

window.addEventListener('load', ()=>{
    let loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        document.images.removeChild('loader');
    })
})