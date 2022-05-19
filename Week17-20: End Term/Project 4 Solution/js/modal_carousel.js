/*
  FOLDER RESPONSIBLE FOR THE CAROUSEL WITHIN THE MODAL AND IT'S OPERATIONS
*/

const imagesDiv = document.querySelector(".imagesDiv");
const bottomSliderDiv = document.querySelector(".btm-sliders");
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" modalActive", "");
  }

  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " modalActive";
  }
}

/*
Adding something like this into the html file: 

<div class="mySlides fade">
    <div class="deleteBtn">x</div>
    <img src="./assets/image6.jpeg" class="carousel-image" />
</div>
*/
function addImageToCarouselModal(imgSource, appendingDiv) {
  // creating the image div, note that deleteImage is found in modal.js
  const imageContainer = document.createElement("div");
  imageContainer.classList = "mySlides fade";
  imageContainer.innerHTML = `<div class="deleteBtn" onClick="deleteImage(${appendingDiv.children.length})">x</div> <img src=${imgSource} class="carousel-image" />`;

  // Appending the image div into the carousel
  appendingDiv.appendChild(imageContainer);
}

/*
Adding something like this into the html file: 

<span class="dot" onclick="currentSlide(1)"></span>
*/
function addBottomSliderModal(index, appendingDiv) {
  const spanSlider = document.createElement("span");
  spanSlider.classList = "dot";
  spanSlider.setAttribute("onclick", `currentSlide(${index})`);

  appendingDiv.appendChild(spanSlider);
}

function resetCarouselModal() {
  imagesDiv.innerHTML = ``;
  bottomSliderDiv.innerHTML = ``;
}

function renderCarouselModal() {
  const amountOfImages = imagesDiv.children.length;
  const imageArray = data.images;

  if (imageArray.length > 0 && amountOfImages !== imageArray.length) {
    resetCarouselModal();
    for (let i = 0; i < imageArray.length; i++) {
      addImageToCarouselModal(imageArray[i], imagesDiv);
      addBottomSliderModal(i + 1, bottomSliderDiv);
    }
    slideIndex = imageArray.length;
    showSlides(slideIndex);
  }

  if (imageArray.length > 0) {
    nextArrow.classList = "next active";
    prevArrow.classList = "prev active";
  }

  if (imageArray.length === 0) {
    resetCarouselModal();
    nextArrow.classList.remove("active");
    prevArrow.classList.remove("active");
  }
}

setInterval(() => {
  renderCarouselModal();
}, 1);
