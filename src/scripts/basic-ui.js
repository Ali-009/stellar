
const hamburgerButton = document.querySelector('.hamburger-button')
let hamburgerIsOpen = false;
const mainButtonList = document.querySelectorAll('.main-button')


hamburgerButton.addEventListener('click', (e) => {
    if(!hamburgerIsOpen){
        hamburgerIsOpen=true;
        let totalTranslation = 0;
        mainButtonList.forEach((mainButton) => {
            mainButton.style.transform = `translateY(calc(${totalTranslation += 67}px)`
            mainButton.style.opacity = 1;
        })
    } else {
        //In this code block, we are simply translating our buttons in the opposite direction
        hamburgerIsOpen = false;
        let totalTranslation = 0
        mainButtonList.forEach((mainButton) => {
            mainButton.style.transform = `translateY(0)`
            mainButton.style.opacity = 0;
        })
    }
})
