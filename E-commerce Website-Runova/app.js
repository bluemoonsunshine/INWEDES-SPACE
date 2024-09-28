window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
/*about*/
const images = [
  "././img/itemsdisplay/shoes-aboutus1.png",
  "././img/itemsdisplay/shows-aboutus2.png",
  "././img/itemsdisplay/shoes-aboutus3.png",
  "././img/itemsdisplay/shoes-aboutus4.png",
  "././img/itemsdisplay/shoes-aboutus5.png",
];

let currentIndex = 0;

function changeImage() {
  const imgElement = document.getElementById("aboutpic");
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);

const aboutUs = document.getElementById("aboutUs");

function lightningEffect() {

  const randomInterval = Math.random() * 2000 + 500;

  
  aboutUs.style.opacity = 1;
  aboutUs.style.color = "#2bb1ff";
  aboutUs.style.textShadow = "0px 0px 30px white, 0px 0px 50px #2bb1ff";

  // After a short delay, make it dim again (like a lightning flash fading)
  setTimeout(() => {
    aboutUs.style.color = "black";
  }, 100); // Flash lasts 100ms (you can adjust this)

  // Schedule the next flash
  setTimeout(lightningEffect, randomInterval);
}

// Start the lightning effect
lightningEffect();



/*about ends*/