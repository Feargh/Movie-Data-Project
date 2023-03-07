let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};
// let text = JSON.stringify(movieData);
// document.getElementById("demo").innerHTML = text;

// let y = year;
// let p = "plot";
// let c = cast;
// let rt = runtime;
// let ra = rating;

document.getElementById("movieName").innerHTML = movieData["The Darjeeling Limited"];
document.getElementById("moviePlot").innerHTML = movieData["The Darjeeling Limited"].plot;
document.getElementById("movieCast").innerHTML = movieData["The Darjeeling Limited"].cast;
document.getElementById("movieYear").innerHTML = movieData["The Darjeeling Limited"].year;
document.getElementById("movieRating").innerHTML = movieData["The Darjeeling Limited"].rating;
document.getElementById("movieRuntime").innerHTML = movieData["The Darjeeling Limited"].runtime;


//   document.getElementById("demo2").innerHTML =
// movieData.plot + "," + movieData.year + "," + movieData.cast;
// console.log(movieData["The Darjeeling Limited"].cast[0]);


//Controls for slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt
}