// Carousel

const carouselContainer = document.querySelector('.carousel-container');
const listImageArea = carouselContainer.querySelector('.next-list');
const listOfImages = listImageArea.querySelectorAll('img');
const currentImage = carouselContainer.querySelector('.current-image');
const arrowLeft = carouselContainer.querySelector('.arrow-left');
const arrowRight = carouselContainer.querySelector('.arrow-right');


function styleList() {
	if (listImageArea.scrollWidth == listImageArea.offsetWidth){
		listImageArea.style.justifyContent = 'center'
	} else {
		listImageArea.style.justifyContent = 'flex-start'
	}
	
};


for (var i = listImageArea.children.length; i >= 0; i--) {
listImageArea.appendChild(listImageArea.children[Math.random() * i | 0]);
};

function goToRight() {
	var current = listImageArea.querySelector('.current-image-list');
	current.parentElement.nextElementSibling.children[0].classList.add('current-image-list');
	current.classList.remove('current-image-list');
	current = listImageArea.querySelector('.current-image-list');
	listImageArea.scrollLeft = current.offsetLeft;
	currentImage.attributes.src.value = current.attributes.src.value;
	currentImage.classList.add('slideInFromRight');
	setTimeout(function () {
		currentImage.classList.remove('slideInFromRight');
	}, 500);
};

function goToLeft() {
	var current = listImageArea.querySelector('.current-image-list');
	current.parentElement.previousElementSibling.children[0].classList.add('current-image-list');
	current.classList.remove('current-image-list');
	current = listImageArea.querySelector('.current-image-list');
	listImageArea.scrollLeft = current.offsetLeft;
	currentImage.attributes.src.value = current.attributes.src.value;
	currentImage.classList.add('slideInFromLeft');
	setTimeout(function () {
		currentImage.classList.remove('slideInFromLeft');
	}, 500);
};

function changeCurrentImage (newImage) {
	currentImage.classList.add('fadeIn');
	setTimeout(function () {
		currentImage.classList.remove('fadeIn');
	}, 500);
	currentImage.attributes.src.value = this.attributes.src.value;
	listOfImages.forEach(image => image.classList.remove('current-image-list'));
	listOfImages.forEach(function (image) {
		image.classList.remove('current-image-list');
	})
	this.classList.add('current-image-list');
}

styleList();

arrowLeft.addEventListener('click', goToLeft);
arrowRight.addEventListener('click', goToRight);

window.addEventListener('resize', function (e) {
	styleList();
});

(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

listOfImages.forEach(image => image.addEventListener('click', changeCurrentImage));
listOfImages.forEach(function(image) {
	image.addEventListener('click', changeCurrentImage);
});


for (let i = 0; i < 21; i++) {
	const img = document.createElement('img');
    img.src = `Images/work-[i]${items[i]}`;
    const li = document.createElement('li');
    li.appendChild(img);
    document.getElementById('next-list').appendChild(li);
}
// Randomize Carousel

function randomize() {
	const ul = document.querySelector('.next-list');
	const lis = Array.from(ul.querySelectorAll('.image-of-list'));
	lis.sort(() => 0.5 - Math.random());
	for (const li of lis) {
	  ul.appendChild(li);
	}
  }

window.onload = function() {
randomize();
}

// New Randomize Function


// // Nav Menu
// var lastScrollTop = 0;

// window.addEventListener("scroll", function() {
//   var header = document.querySelector(".navbar");
//   var navMenu = document.getElementById("nav-menu");
//   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//   if (currentScroll > lastScrollTop) {
//     header.classList.add("hidden");
//     navMenu.classList.add("hidden");
//   } else {
//     header.classList.remove("hidden");
//     navMenu.classList.add("hidden");
//   }
//   lastScrollTop = currentScroll;
// });

// document.getElementById("menu-button").addEventListener("click", function() {
//   var navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("hidden");
//   navMenu.classList.toggle("active");
// });
