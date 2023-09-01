const hamburgerMenu = document.getElementById('hamburgerIcon')
const closeIcon = document.getElementById('closeIcon')
const navList = document.querySelector('.navList')




hamburgerMenu.addEventListener('click', () => {
    closeIcon.classList.remove('hidden')
    hamburgerMenu.classList.add('hidden')
    navList.classList.remove('hidden')
})

closeIcon.addEventListener('click', () => {
    closeIcon.classList.add('hidden')
    hamburgerMenu.classList.remove('hidden')
    navList.classList.add('hidden')
})


console.log(hamburgerMenu)



// reviews carousel
const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    slidesContainer.scrollLeft -= slideWidth;
});




// fixed navbar
const navbar = document.querySelector('nav');
const content = document.querySelector('.content');
const navDesktop = document.querySelector('.navForDesktop')
// const navList = document.querySelector('.navList')

// console.log(navDesktop)
// Store the initial position of the navbar
const initialNavbarOffsetTop = navbar.offsetTop;

// Function to toggle the "fixed" class based on scroll position
function toggleFixedNavbar() {
    if (window.pageYOffset >= initialNavbarOffsetTop) {
        navbar.classList.add('fixed');
        // console.log(navDesktop)
        navList.classList.add('fixedNavList');
        // navDesktop.classList.add('navDesktop');
        // navList.style.margin = "4rem"
    } else {
        navbar.classList.remove('fixed');
        navList.classList.remove('fixedNavList');

    }
}

// Add a scroll event listener
window.addEventListener('scroll', toggleFixedNavbar);
