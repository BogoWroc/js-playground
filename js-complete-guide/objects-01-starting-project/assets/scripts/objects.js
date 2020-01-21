const addMovieButton = document.getElementById("add-movie-btn");
const searchMovieButton = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (title !== '' && extraName !== '' && extraValue !== '') {

        const movie = {
            id: Math.random(),
            info: {
                title,
                [extraName]: extraValue
            },
            toString() {
                return `${this.info.title} - ${extraName}:${this.info[extraName]}`
            }
        };
        movies.push(movie);
    }
    render(movies);
};

function render(movies){
    console.log("-------------------------------");
    movies.forEach(movie => console.log(movie.toString()));
    console.log("-------------------------------");

    const movieList = document.getElementById("movie-list");

    if(movies.length ===0){
        movieList.classList.remove('visible');
        return
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    movies.forEach(movie => {
       const movieEl = document.createElement('li');
       movieEl.textContent = movie.toString();
       movieList.append(movieEl);
    });
}

const searchMovieHandler = () => {
    const searchTitle = document.getElementById('filter-title').value;
    const filteredMovies = movies.filter(movie => {
        return movie.toString().includes(searchTitle)
    });
    render(filteredMovies);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchMovieButton.addEventListener("click", searchMovieHandler);
