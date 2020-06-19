const movieList = document.getElementById("movieList");
const selectedMovie = document.getElementById("selectedMovie");

data.forEach((movie, i) => {
	movieList.innerHTML += `<img class="movie" src="${movie.image}" onclick="selectMovie(${i})"/>`;
});

const selectMovie = (movieIndex) => {
	const movie = data[movieIndex];
	selectedMovie.innerHTML = `
		<div class="movieInfo">
			<h2>${movie.name}</h2>
		</div>
		<button class="exitSelected" onclick="exitSelected()">X</button>
		<video class="moviePlayer" width="800" height="400" controls>
			<source src="${movie.video}" type="video/${movie.video.substr(movie.video.lastIndexOf('.') + 1)}"/>
		</video>
		<div class="backgroundGradient"></div>
		<img class="backgroundImage" src="${movie.image}"/>
	`;	

	movieList.style.display = "none";
	selectedMovie.style.display = "block";
}

const exitSelected = () => {
	movieList.style.display = "flex";
	selectedMovie.style.display = "none";
};
