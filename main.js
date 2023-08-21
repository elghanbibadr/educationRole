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
