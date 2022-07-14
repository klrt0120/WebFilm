const key_api = "d8f8edbbdc27ab9a16942772f29aa16c";
const popularurl = ``;
var page;
const apiTvpopular = `https://api.themoviedb.org/3/tv/popular?api_key=${key_api}&language=vi&page=1`;
const img = (poster_path) => `https://image.tmdb.org/t/p/w300${poster_path}`;

const getFilm = (callback) => {
  fetch(apiTvpopular)
    .then((response) => {
      return response.json();
    })
    .then(callback);
};

function displayPopulartv() {
  const tvList = document.querySelector(".tv-list");
  getFilm((data) => {
    data = data.results;

    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      const li = document.createElement("li");
      li.setAttribute("class", "tv-item");
      {
        data[i].backdrop_path
          ? li.setAttribute("class", "tv-item")
          : li.setAttribute("class", "tv-item-none");
      }
      tvList.appendChild(li);
      li.innerHTML = `
        <div class="tv-image">
            <img src=${img(data[i].backdrop_path)} ></img>
        </div>
        <div class="tv-item-name">
            ${data[i].name}
        </div>
      `;
    }
  });
}
displayPopulartv();
