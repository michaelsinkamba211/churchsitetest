const homeElement = document.querySelector(".home");
const h2Element = document.querySelector(".home_content h2");
const onesElement = document.querySelector(".home .ones");
const twosElement = document.querySelector(".home .twos");

const images = ["../images/home_image.jpg", "../images/home_img.jpg"];

const texts = [
  "We love <span id='special'>God</span> we believe in God",
  "Following <span id='special'>Jesus</span> wherever we are"
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  homeElement.style.backgroundImage = `url(${images[currentIndex]})`;
  h2Element.innerHTML = texts[currentIndex];

  // Toggle background-color for .ones and .twos
  if (currentIndex === 0) {
    onesElement.style.backgroundColor = "var(--primary-color)";
    twosElement.style.backgroundColor = "";
  } else {
    onesElement.style.backgroundColor = "";
    twosElement.style.backgroundColor = "var(--primary-color)";
  }
}, 5000);



// changing the background color of the nav-setion when home section is done

const homeSection = document.querySelector(".home"); //grab the home section
const navSection = document.querySelector(".nav-section"); // grab the nav bar
const navLinks = document.querySelectorAll(".nav-links li a"); //grab the navLinks
const navliks = document.querySelectorAll("header nav .nav-links .tablet-hide li a");
const companyName = document.querySelector("header nav h1"); //grab the main title


window.addEventListener("scroll", () => {
  if (homeSection.getBoundingClientRect().bottom <= 30) {
    navSection.style.backgroundColor = "#fff";
    navLinks.forEach((link) => (link.style.color = "#707070"));
    companyName.style.color = "#707070";  

  } else {
    navSection.style.backgroundColor = "transparent";
    navLinks.forEach((link) => (link.style.color = "#ffd615"));

    companyName.style.color = "#fff";
    navLinks.forEach((link) => (link.style.fontWeight = "normal"));
  }
});

// numbers counting

// Function to start the counting effect
function startCounting(element) {
  const targetNumber = parseInt(element.getAttribute("data-count"));
  let currentNumber = 0;
  const duration = 3000;
  const step = (targetNumber / duration) * 10;

  function updateCount() {
    if (currentNumber < targetNumber) {
      currentNumber += step;
      if (currentNumber > targetNumber) {
        currentNumber = targetNumber;
      }
      element.textContent = Math.round(currentNumber);
      requestAnimationFrame(updateCount);
    }
  }

  updateCount();
}

// Intersection Observer to trigger counting effect
const aboutSection = document.querySelector(".about");
const numbersElements = aboutSection.querySelectorAll(
  ".who_are_in_org .numbers"
);

// start counting again if the section is out of view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      numbersElements.forEach((element) => {
        startCounting(element);
      });
      observer.unobserve(aboutSection); // Stop observing once started
    }
  });
});

observer.observe(aboutSection);


// video section

function openVideo(videoLink) {
  window.open(videoLink, 'VideoPlayer', 'height=350,width=400');
  return false; // Prevents the default behavior of the link
}


// infinix scrolling


// Add JavaScript for smooth scrolling on small screens
const allPhotos = document.querySelector('.gallery .all_photos');
  let isScrolling = false;
  let startX;

  function scrollLeft() {
    allPhotos.scrollBy({
      left: -200, // Adjust as needed
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    allPhotos.scrollBy({
      left: 200, // Adjust as needed
      behavior: 'smooth'
    });
  }

  allPhotos.addEventListener('touchstart', (e) => {
    isScrolling = true;
    startX = e.touches[0].clientX;
  });

  allPhotos.addEventListener('touchmove', (e) => {
    if (isScrolling) {
      const diffX = startX - e.touches[0].clientX;
      allPhotos.scrollLeft += diffX;
      startX = e.touches[0].clientX;
    }
  });

  allPhotos.addEventListener('touchend', () => {
    isScrolling = false;
  });

  // testing

document.querySelectorAll('nav-links ul a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetClass = this.getAttribute('href').substring(1); // Get the target class name
      const targetSection = document.querySelector('.' + targetClass);
      if (targetSection) {
          const offsetTop = targetSection.offsetTop - 50; // Subtract 50px for the header
          window.scroll({
              top: offsetTop,
              behavior: 'smooth' // Add smooth scrolling behavior
          });
      }
  });
});


// leave


const links = document.querySelectorAll('.nav-section ul a');
const sections = document.querySelectorAll('section');
const headerHeight = 60; // Adjust this value according to your header height

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + headerHeight; // Add the header height to the scroll position

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            links.forEach((link, i) => {
                link.style.borderBottom = '2px solid transparent';
                link.style.backgroundColor = 'transparent'; // Reset background color
        
                link.addEventListener('mouseover', () => {
                    // Remove the border-bottom from the currently highlighted section
                    links[index].style.borderBottom = '2px solid transparent';
                    links[index].style.backgroundColor = 'transparent';
        
                    // Add the border-bottom to the section you're hovering over
                    // link.style.borderBottom = '2px solid #ffd615';
                    link.style.backgroundColor = '#insert';
                    
                    // Update the index to the one you're hovering over
                    index = i;
                });
            });
        
            links[index].style.borderBottom = '2px solid #ffd615';
            links[index].style.backgroundColor = '#insert'; // Set the background color for the initial section
        }
  

        
    });
});





// animation

// already selected section

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 550 ;
    let height = sec.offsetHeight;

    if(top >= offset && top< offset + height){
      sec.classList.add('show-animate');
    }
    // else {
    //   sec.classList.remove('show-animate');
    // }

  })
}
