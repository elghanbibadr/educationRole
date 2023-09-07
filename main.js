const hamburgerMenu = document.querySelector('.hamburgerIcon')
const closeIcon = document.getElementById('closeIcon')
const navList = document.querySelector('.navList')
const navbar = document.querySelector('.navbar')


console.log(hamburgerMenu)

// Your JavaScript code here
hamburgerMenu.addEventListener('click', () => {
    console.log("clicked")
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

console.log(slideWidth)

nextButton.addEventListener("click", () => {
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    slidesContainer.scrollLeft -= slideWidth;
});




// fixed navbar
// const navbar = document.querySelector('nav');
// const content = document.querySelector('.content');
// const navDesktop = document.querySelector('.navForDesktop')
// const navList = document.querySelector('.navList')

// console.log(navDesktop)
// Store the initial position of the navbar
const initialNavbarOffsetTop = navbar.offsetTop;

// Function to toggle the "fixed" class based on scroll position
// function toggleFixedNavbar() {
//     if (window.pageYOffset >= initialNavbarOffsetTop) {
//         navbar.classList.add('fixed');

//     } else {
//         navbar.classList.remove('fixed');

//     }
// }

// // // Add a scroll event listener
// window.addEventListener('scroll', toggleFixedNavbar);
function toggleFixedNavbar() {
    if (window.innerWidth <= 768) { // Check if window width is less than or equal to 768px
        if (window.pageYOffset >= initialNavbarOffsetTop) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    } else {
        // If the window width is larger than 768px, you can choose to do something else or nothing.
        // For example, you can remove the 'fixed' class if it's currently added when the window is resized.
        navbar.classList.remove('fixed');
    }
}

// Add a scroll event listener
window.addEventListener('scroll', toggleFixedNavbar);

// Add a resize event listener to handle changes in window width
window.addEventListener('resize', toggleFixedNavbar);

