
const hamburgerButton = document.querySelector('.hamburger-button')
let hamburgerIsOpen = false;
const mainButtonList = document.querySelectorAll('.main-button')

hamburgerButton.addEventListener('click', (e) => {
    if(!hamburgerIsOpen){
        hamburgerIsOpen=true;
        mainButtonList.forEach((mainButton) => {
            mainButton.classList.toggle('show-button')
            mainButton.style.opacity = 1;
        })
    } else {
        hamburgerIsOpen = false;
        mainButtonList.forEach((mainButton) => {
            mainButton.classList.toggle('show-button')
            mainButton.style.opacity = 0;
        })
    }
})
