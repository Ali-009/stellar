
const hamburgerButton = document.querySelector('.hamburger-button')
let hamburgerIsOpen = false;
const mainButtonList = document.querySelectorAll('.main-button')

hamburgerButton.addEventListener('click', (e) => {
    if(!hamburgerIsOpen){
        hamburgerIsOpen=true;
        mainButtonList.forEach((mainButton, index) => {
            mainButton.classList.toggle('show-button')
            mainButton.style.opacity = 1;
        })
    } else {
        //In this code block, we are simply translating our buttons in the opposite direction
        hamburgerIsOpen = false;
        mainButtonList.forEach((mainButton) => {
            mainButton.classList.toggle('show-button')
            mainButton.style.opacity = 0;
        })
    }
})
