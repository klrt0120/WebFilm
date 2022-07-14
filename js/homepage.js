const apiFilm = "./data/film.json";
const img = (poster_path) => `https://image.tmdb.org/t/p/w500/${poster_path}`;
var filmItem = document.querySelector(".film-list");

const getFilm = (callback) => {
  fetch(apiFilm)
    .then((response) => {
      return response.json();
    })
    .then(callback);
};

const displayFilm = () => {
  getFilm((data) => {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      var div = document.createElement("div");
      div.setAttribute("class", "film-item");
      div.setAttribute("id", `${data[i].id}`);

      filmItem.appendChild(div);
      console.log(`film?id=${data[i].id}`);
      div.innerHTML = `<img src=${img(data[i].poster_path)}></img>
                      <div class="info">
                          <a href="film/${data[i].id}">
                              <h2 class="filmUpdate-name">${data[i].title}</h2>
                          </a>

                      </div>`;
    }
  });
};

// const displayFilmHot = () => {
//   const filmHotList = document.querySelector(".filmHot-list");
//   getFilm((data) => {
//     for (var i = 0; i < data.length; i++) {
//       var li = document.createElement("li");
//       li.setAttribute("class", "filmHot-item");
//       filmHotList.appendChild(li);
//       li.innerHTML = `
//        <a href="film/${data[i].id}">
//           <div class="filmHot-image">
//           <img src=${img(data[i].poster_path)}></img>
//           </div>
//           <div class="filmHot-name">${data[i].title}</div>
//        </a>

//        `;
//     }
//     slickSlide();
//   });
// };
function displayPosterShow() {
  const filmHotList = document.querySelector(".filmBanner-list");
  getFilm((data) => {
    for (var i = 3; i <10; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "filmBanner-item");
      filmHotList.appendChild(li);
      li.innerHTML = `
        <a href="film/${data[i].id}">
            <div class="filmBanner-image">
            <img src=${img(data[i].backdrop_path)}></img>
            <h5 class="filmBanner-name">${data[i].original_title}</h5>
           </div>
        </a>
        `;
    }
    slickSlideBanner()
  });
}
const displayAccount = () => {
  var auth = document.querySelector(".header-auth");
  var authWork = document.querySelector(".header-auth-work");
  var account = document.querySelector(".header-account");
  var login = JSON.parse(localStorage.getItem("login"));
  var accountName = document.querySelector(".account-name");
  console.log(account);
  if (login) {
    auth.style.display = "none";
    authWork.style.display = "block";

    const name = document.createElement("div");
    const dropdown = document.createElement("div");
    name.setAttribute("class", "header-name");
    dropdown.setAttribute("class", "header-dropdown");
    accountName.innerHTML = `
    ${login.fullname ? login.fullname : "Vô danh"}
    `;

    const logout = () => {
      const btnLogout = document.querySelector(".header-logout");
      btnLogout.addEventListener("click", () => {
        localStorage.removeItem("login");
        window.location.reload();
      });
    };
    logout();
  }
};
const slickSlideBanner = () =>{
  $('.filmBanner-list').slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true ,
    autoplaySpeed: 2000,
    autoplay: true,
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          
        }
      }
    ]
  });
}
const slickSlide = () => {
  $(".filmHot-list").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplaySpeed: 1000,
    autoplay: true,
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
};

// displayFilmHot();
displayFilm();
displayAccount();
// logout();
displayPosterShow();
// backgroundLogin() ;
