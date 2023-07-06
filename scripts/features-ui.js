
const gameImagePaths = [
    '../assets/phantom-forces-banner.png',
    '../assets/arsenal-banner.png',
    '../assets/criminality.png',
]

const featureData = [
    [
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
    ],
    [
        //Below are features that are lorem ipsum but follow the same pattern
        {
            title: 'lorem ipsum',
            featureTagline: 'quis, egestas ipsum. Nulla tincidunt, diam sit',
            features: ['i ac enim convallis laoreet. Vivamus pulvinar eget ante a mattis. Vivamus vitae laoreet metus. Etiam rhoncus nisl non enim m','iam, in lobortis libero egestas eget. Suspendisse sapien eros, interdum eget elit quis, scelerisque placerat neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi consequat pharetra sapien, non volutpat nibh gravida id. Quisque nec aliquam felis, ac rutrum quam. Donec lorem',' Donec volutpat porttitor diam eget ultricies. Vestibulum efficitur lacinia purus aliquam aliquet. Vestibulum vitae auctor ante. Proin velit lacus, imperdiet quis eros non, viverra luctus libero. Suspendisse euism'],
            cssClass: 'lorem-class'
        },
        {
            title: 'dolor sit amet, consectetur adipiscing',
            featureTagline: 'eget odio. Sed rutrum sapien neque, in pellentesque urna sodales at. Nam quis felis sed dolor aliquet luctus. Ves',
            features: ['c in tristique enim. Aenean aliquam vitae est et lobortis. Phasellus commodo orci ac enim convallis laoreet. Vivamus pulvinar eget ante a mattis. Vivamus vitae laoreet metus. Etiam rhoncus nisl','non enim maximus, id scelerisque lorem bibendum. Nam eget dictum neque. Praesent mi lacus, '],
            cssClass: 'lorem-class'
        },
        {
            title: 'Pellentesque posuere nunc at augue',
            featureTagline: 'Donec lorem sapien, vulputate non tincidunt at, bibendum vel ante.',
            features: ['Maecenas ornare justo diam, in lobortis libero egestas eget.','us hendrerit non nec elit. Ut non dolor quis elit euismod faucibus ac vitae leo. Mauris convallis, nisl a congue laoreet, nisl lectus consectetur nunc, id varius orci massa ut ipsum. Integer lacinia fermentum','orttitor diam eget ultricies. Vestibulum efficitur lacinia purus aliquam aliquet. Vestibulum vitae auctor ante. Proin '],
            cssClass: 'lorem-class',
        }
    ]
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


//displayFeatures is a handler that will display the appropriate game features
//When a game is clicked. The correct features are passed to this function

function displayFeatures(features){
        //Remove game-grid styling
        document.querySelector('#features-grid').classList.toggle('game-grid')
        const allTests = document.querySelectorAll('.test-box')
        //Removing the initially displayed games
        for(let i = 0; i < allTests.length; i++){
            allTests[i].remove();
        }
        //Displaying four features
        const featuresGrid = document.querySelector('.features-grid')
        for(let i = 0 ; i < features.length; i++){
            featuresGrid.appendChild(drawFeatureBox(features[i]))
        }
        //Back button
        const backButton = document.createElement('button')
        const backImage = document.createElement('img')
        backButton.classList.add('back-button')
        backImage.src = '../assets/Arrow_back.svg'
        backButton.appendChild(backImage)
        document.querySelector('.features-header-container')
        .appendChild(backButton)
        backButton.addEventListener('click', () => {
            //Add game-grid styling
            document.querySelector('#features-grid').classList.toggle('game-grid')
            const featureBoxes = document.querySelectorAll('.feature-text-container')
            for(let i = 0; i < featureBoxes.length; i++){
                featureBoxes[i].remove()
            }
            //Removing the back button 
            backButton.remove()
            //Recreating gameBoxes
            const gameBoxes = []
            const gameImages = []
            for(let i =  0; i < 3; i++){
                gameBoxes[i] = document.createElement('div')
                gameImages[i] = document.createElement('img')
                gameBoxes[i].classList.add('test-box')
                gameImages[i].src = gameImagePaths[i]
                gameBoxes[i].appendChild(gameImages[i])
                featuresGrid.appendChild(gameBoxes[i])
            }
            gameBoxes[0].addEventListener('click', () => { displayFeatures(featureData[0]) })
            gameBoxes[1].addEventListener('click', () => { displayFeatures(featureData[1]) })
        })
}

const testElement1 = document.querySelectorAll('.test-box')[0]
testElement1.addEventListener('click', () => { displayFeatures(featureData[0]) })

const testElement2 = document.querySelectorAll('.test-box')[1]
testElement2.addEventListener('click', () => { displayFeatures(featureData[1]) })
