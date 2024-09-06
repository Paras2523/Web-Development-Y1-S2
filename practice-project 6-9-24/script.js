const myMovieData = {
id: 1,
title: "Rear Window",
director: "Alfred Hitchcock",
year:1954,
genre:[
    "Mystery",
    "Thriller"
],
rating:10,
starring: [
    "James Stewart",
    "Grace Kelly"
]
};

async function getMovies(){
    const res = await fetch("https://web1-z04e.onrender.com/movies");
const fetchedMovies = await res.json();
displayMovies(fetchedMovies);
}

getMovies();

function displayMovies(moviesData){
    for (movie of moviesData)
    {
        const MovieCard = document.createElement("div");
        
        MovieCard.innerHTML = `
    <h2>Title: ${movie.title}</h2>
    <p class="movie-date">Date: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <p>Rating: <strong>${movie.rating}</strong></p>
`;
webpage.appendChild(MovieCard);
    }
}

const webpage= document.querySelector("body");



const actorList = document.createElement("ul");
for (const actor of myMovieData.starring)
{
    const actorItem = document.createElement("li");
    actorItem.innerText = actor;
    actorList.appendChild(actorItem);
}
MovieCard.appendChild(actorList);
