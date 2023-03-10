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

console.log(Object.keys(movieData).sort()); //Can sort an array but movieData is an object so needs to be changes to an array first.
console.log(Object.values(movieData).sort()); // Sorting the nested data from the array and logging it.

// To make an array from the first level of movieData (the titles)
const titles = Object.keys(movieData);
console.log(titles);
console.log("Is titles an array? " + Array.isArray(titles));

//to make an array from the nested data.
let values = Object.values(movieData);
console.log(values);
console.log("IS values1 an array? " + Array.isArray(values));
console.log(values[0].plot);

let slideIndex = 1; //might be cool to put a random number between 1-4?
showSlides(slideIndex);

function currentSlide(n) {     //Onclick linked to this currentSlide()
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");       //demo are thumbnails
  let captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //dots is demo are the thumbnails
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt
  document.getElementById("movieName").innerHTML = titles[slideIndex-1];
  document.getElementById("moviePlot").innerHTML = values[slideIndex-1].plot;
  document.getElementById("movieCast").innerHTML = values[slideIndex-1].cast;
  document.getElementById("movieYear").innerHTML = values[slideIndex-1].year;
  document.getElementById("movieRating").innerHTML = values[slideIndex-1].rating + "/10";
  document.getElementById("movieRuntime").innerHTML = values[slideIndex-1].runtime + "minutes";
}

// Add this to the showslides function also but also need to make a function showText(n)??
function showText(n) {
  let i;
  let text = document.getElementsByClassName("myText")
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");       //demo are thumbnails


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //dots is demo are the thumbnails
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
} 

// Form listening to add the data to the object

// form = document[movieInputForm];
document[movieInputForm].addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(document[movieInputForm]);
  console.log(fd);
})