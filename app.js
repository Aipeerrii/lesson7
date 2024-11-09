
// const api_url = 'https://api.sampleapis.com/movies/';
// //dom
// const movies = document.querySelector('.movies')
// const buttons = document.querySelectorAll('#btns button')
// console.log("buttons: ", buttons);

// buttons.forEach( btn => {
//     btn.addEventListener('click', () => {
//         console.log(btn.innerText);
//         movies.innerHTML = `<div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>`
//         fetchMovies(btn.innerText)
//     })
// })

// function fetchMovies(genre = 'animation'){
//     fetch(api_url + genre)
//        .then( (response) => {
//             console.log(response, '----response ----');

//             return response.json()
//        })
//        .then( (movieData) => {
//         console.log(movieData,'-----data----');
//         renderCard(movieData)
//        })
// }

// fetchMovies();

// function renderCard(arr = []){
//     movies.innerHTML = arr.map( (film) => {
//         return `
//         <div class="card" style="width: 18rem;">
//            <img src="${film.posterURL}" class="card-img-top" alt="...">
//            <div class="card-body">
//                <h5 class="card-title"> ${film.little}</h5>
//            </div>
//         </div>`
//     })
// }





const api_url = 'https://api.sampleapis.com/coffee/';
// const api_url = 'https://api.sampleapis.com/coffee/hot';
//dom
const coffee = document.querySelector('.coffee')
const buttons = document.querySelectorAll('#btns button')
console.log("buttons: ", buttons);

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        coffee.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
        fetchCoffee(btn.innerText)
    })
})

function fetchCoffee(genre = 'animation'){
    fetch(api_url + genre)
       .then( (response) => {
            console.log(response, '----response ----');

            return response.json()
       })
       .then( (coffeeData) => {
        console.log(coffeeData,'-----data----');
        renderCard(coffeeData)
       })
}

fetchCoffee();

function renderCard(arr = []){
    coffee.innerHTML = arr.map( (coffee) => {
        return `
        <div class="card" style="width: 18rem;">
           <img src="${coffee.image}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title"> ${coffee.little}</h5>
           </div>
        </div>`
    })
}
