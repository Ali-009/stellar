
const featureData = [
    {
        title: 'Silent Aim',
        featureTagline: 'Want to hit your shots while looking unbelievably legitimate?',
        features: ['Nearest Point, instead of hitting the closest body part, you can hit anywhere precisely!', 'Aimviewer bypass, you won\'t get caught when someone aimviews you.','Gun type fov, allows you to change the fov for each gun type (Revolver, Double Barrel, SMG Tactical Shotgun, Shotgun, etc).','Range FOV, allows you to do the same but for each range.','Resolver, resolves everything you can hit with legit aim.','Fov Type 2, instead of the fov following your cursor, it follows the target.'],
        cssClass: 'silent-aim'
    },
    {
        title: 'Camlock',
        featureTagline: 'Looks insanely legitimate, similar to aimassist:',
        features: ['Allows you to change the prediction and smoothness for air, increasing the shots for you to hit an airshot.', 'Disables on third person option, if you go in third person and you\'re locked on someone it\'ll disable, when you zoom back in first person, it\'ll enable back against that target.', 'Disable on reload option, if turned on, whenever you reload and you\'re locked on someone it\'ll disable until you\'re done reloading, and lock back at that target.'],
        cssClass: 'camlock'
    },
    {
        title: 'Triggerbot',
        featureTagline: 'Want to never get caught while hitting insane shots?:',
        features: ['This triggerbot comes with Prediction, allowing you to accurately hit your shots like a  silent aim.','You can change the prediction for each gun type and range.'],
        cssClass: 'triggerbot'
    },
    {
        title: 'Miscellaneous',
        featureTagline: 'Extra features to deliver the ultimate gaming experience:',
        features: ['Macro, first person and third.', 'Memory spoofer, you won\'t get caught because your memory is too high, very advanced and changes everything for memory cards.'],
        cssClass: 'miscellaneous'
    }
]

//This function takes in feature data and uses it to draw one feature box
//The box is styled using the cssClass
function drawFeatureBox(featureObj){
    //Creating a container element that will contain feature elements
    const featureTextContainer = document.createElement('div')
    const featureTitle = document.createElement('h3')
    const featureParagraph = document.createElement('p')
    const featureListContainer = document.createElement('ul')
    //Defining the created elements
    featureTextContainer.classList.add(featureObj.cssClass)
    featureTextContainer.classList.add('feature-text-container')
    featureTitle.textContent = featureObj.title
    featureParagraph.textContent = featureObj.tagline
    //featureListItems is an array of list items that will be appended to a featureList
    let featureListItems = []
    for(let i = 0; i < featureObj.features.length; i++){
        featureListItems[i] = document.createElement('li')
        featureListItems[i].textContent = featureObj.features[i]
        featureListContainer.appendChild(featureListItems[i])
    }
    //Appending the elements to their appropriate parent
    featureTextContainer.appendChild(featureTitle)
    featureParagraph.appendChild(featureListContainer)
    featureTextContainer.appendChild(featureParagraph)
    return featureTextContainer
}


//Clicking the first game (test 1) should render the initial four features

function testOneListener(){
        const allTests = document.querySelectorAll('.test-box')
        //Removing the initially displayed games
        for(let i = 0; i < allTests.length; i++){
            allTests[i].remove();
        }
        //Displaying four features
        const featuresGrid = document.querySelector('.features-grid')
        for(let i = 0 ; i < featureData.length; i++){
            featuresGrid.appendChild(drawFeatureBox(featureData[i]))
        }
        //Back button
        const backButton = document.createElement('button')
        backButton.textContent = 'Back'
        backButton.style.width = '200px'
        backButton.style.justifySelf = 'center'
        featuresGrid.appendChild(backButton)
        backButton.addEventListener('click', () => {
            const featureBoxes = document.querySelectorAll('.feature-text-container')
            for(let i = 0; i < featureBoxes.length; i++){
                featureBoxes[i].remove()
            }
            //Removing the back button 
            backButton.remove()
            //Recreating test boxes
            const testBoxes = []
            for(let i =  0; i < 3; i++){
                testBoxes[i] = document.createElement('div')
                testBoxes[i].classList.add('test-box')
                testBoxes[i].textContent = `test ${i + 1}`
                featuresGrid.appendChild(testBoxes[i])
            }
            testBoxes[0].addEventListener('click', testOneListener)
        })
}
const testOneElement = document.querySelectorAll('.test-box')[0]
testOneElement.addEventListener('click', testOneListener)
