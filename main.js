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