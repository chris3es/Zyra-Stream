// Sample movie data
const movies = {
  trending: [
    { title: "Copper Line", meta: "PG-13 • 1h 42m", poster: "assets/poster-copper.jpg" },
    { title: "Boundary", meta: "R • 2h 04m", poster: "assets/poster-boundary.jpg" },
    { title: "Hollow Peak", meta: "PG • 1h 30m", poster: "assets/poster-hollow.jpg" },
    { title: "Crimson Echo", meta: "PG-13 • 1h 58m", poster: "assets/poster-crimson.jpg" }
  ],
  new: [
    { title: "Dark Frequency", meta: "PG-13 • 1h 49m", poster: "assets/poster-frequency.jpg" },
    { title: "Low Orbit", meta: "PG • 1h 36m", poster: "assets/poster-orbit.jpg" },
    { title: "Night Measure", meta: "R • 2h 10m", poster: "assets/poster-measure.jpg" },
    { title: "Tinderbox", meta: "PG-13 • 1h 40m", poster: "assets/poster-tinderbox.jpg" }
  ]
};

// Render movie cards
function renderGrid(id, list) {
  const grid = document.getElementById(id);
  grid.innerHTML = list.map(movie => `
    <div class="movie-card">
      <img src="${movie.poster}" alt="${movie.title}" />
      <div class="info">
        <div class="title">${movie.title}</div>
        <div class="meta">${movie.meta}</div>
      </div>
    </div>
  `).join("");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderGrid("trendingGrid", movies.trending);
  renderGrid("newGrid", movies.new);

  // Hero buttons
  document.getElementById("playHero").addEventListener("click", () => {
    alert("Playing Glass City...");
  });
  document.getElementById("addHero").addEventListener("click", () => {
    alert("Added Glass City to your list!");
  });
});
