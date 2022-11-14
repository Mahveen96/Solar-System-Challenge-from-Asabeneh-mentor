document.body.style.boxSizing = 'border-box'
document.body.style.margin = '0px'
document.body.style.padding = '0px'
document.body.style.backgroundImage = 'url(images/background.gif)'
document.body.style.display = 'flex'
document.body.style.alignItems = 'center'
document.body.style.flexDirection = 'column'
document.body.style.fontFamily = 'Montserrat'

const header = document.querySelector('header')

const h1 = document.querySelector('h1')
h1.style.color = 'white'
h1.style.marginBottom = '3rem'

const massMessage = document.createElement('p') 
massMessage.style.color = 'white'
massMessage.style.width = '50%'
massMessage.style.fontSize = '12px'
massMessage.style.marginLeft = '6rem'
header.appendChild(massMessage)

const inputField = document.querySelector('.inputField')
inputField.style.display = 'flex'
inputField.style.justifyContent = 'center'

const mass = document.querySelector('#mass')
mass.style.padding = '10px'
mass.style.outline = 'none'
mass.style.width = '30%'

const selectBox = document.querySelector('.selectBox')
selectBox.style.padding = '2px 10px 2px 0px'
selectBox.style.width = '20%'
selectBox.style.background = 'white'
selectBox.style.position = 'relative'
selectBox.style.display = 'block'
selectBox.style.margin = '0px 10px'
selectBox.style.overflow = 'hidden'
selectBox.style.borderRadius = '5px'

const planets = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'moon']

let select = document.querySelector('select')
select.style.outline = 'none'
select.style.border = 'none'
select.style.appearance = 'none'
select.style.webkitAppearance = 'none'
select.style.color = 'grey'
select.style.padding = '10px'
select.style.width = '100%'
select.style.display = 'block'

for(let i = 0; i < planets.length; i++) {
    let option = document.createElement('option')
    option.setAttribute('value', planets[i])
    option.textContent = planets[i].toUpperCase()
    option.style.color = 'black'
    option.style.background = 'rgba(255, 255, 255, 0.6)'
    select.appendChild(option)
}

const span = document.querySelector('span')
span.style.color = 'grey'
span.style.position = 'absolute'
span.style.right = '5px'
span.style.top = '10px'

const button = document.querySelector('button')
button.style.color = 'white'
button.style.background = 'rgba(255, 255, 255, 0.5)'
button.style.outline = 'none'
button.style.border = 'none'
button.style.padding = '10px'
button.style.width = '18%'
button.style.cursor = 'pointer'
button.style.borderRadius = '5px'

// const textBox = document.createElement('div')
// textBox.style.background = 'white'
// textBox.style.padding = '7px'
// textBox.style.margin = '3px 0px 0px 89px'
// textBox.style.display = 'block'
// textBox.style.width = '31%'
// textBox.style.opacity = '1'
// textBox.style.display = 'none'
// const textList = document.createElement('ul')
// textBox.appendChild(textList)
// textList.style.listStyle = 'none'
// textList.style.margin = '0px'
// textList.style.padding = '0px'
// textList.style.display = 'block'
// for(let i = 0; i < 6; i++) {
//    let text = document.createElement('li')
//     text.textContent = 'iam me'
//     textList.appendChild(text)
//     text.style.fontSize = '12px'
//     text.style.fontWeight = '500'
//     text.style.padding = '3px'
// }
// header.appendChild(textBox)

const main = document.querySelector('main')
main.style.margin = '15px'
main.style.width = '70%'
main.style.maxHeight = '100%'
main.style.display = 'flex'
// main.style.border = '1px solid white'
main.style.padding = '2rem 1rem'
main.style.background = 'rgba(255, 255, 255, 0.12)'
main.style.position = 'relative'

const flexContainer = document.querySelector('.flex-container')
flexContainer.style.display = 'flex'
flexContainer.style.alignItems = 'center'
flexContainer.style.width = '100%'
flexContainer.style.padding = '10px'

 const image = document.querySelector('.image')
image.style.width = '50%'
image.style.margin = '0rem 1rem'

 const planetImg = document.querySelector('.planet-image') 
planetImg.style.width = '100%'

const description = document.querySelector('.description')
description.style.background = 'rgba(255, 255, 255, 0.13)'
description.style.width = '55%'
description.style.height = '45%'
description.style.margin = '10px'
description.style.padding = '0px 20px 10px'

const descriptionTitle = document.createElement('p')
descriptionTitle.textContent = 'The weight of the object on'
descriptionTitle.style.fontSize = '14px'
descriptionTitle.style.color = 'white'
descriptionTitle.style.textAlign = 'center'
description.appendChild(descriptionTitle)

const planetName = document.createElement('span') 
planetName.style.color = 'white'
planetName.style.marginLeft = '5px'
planetName.style.fontSize = '16px'
planetName.style.fontWeight = '800'
descriptionTitle.append(planetName)

const planetValueContainer = document.createElement('div')
planetValueContainer.style.borderRadius = '50%'
planetValueContainer.style.background = 'rgba(255,255,255,0.15)'
planetValueContainer.style.width = '25%'
planetValueContainer.style.height = '60%'
planetValueContainer.style.margin = '0rem 8rem'
planetValueContainer.style.position = 'relative'
description.appendChild(planetValueContainer)

const planetValue = document.createElement('span') 
planetValue.style.color = 'white'
planetValue.style.textAlign = 'center'
planetValue.style.position = 'absolute'
planetValue.style.right = '10px'
planetValue.style.bottom = '30px'
planetValue.style.left = '10px'
planetValueContainer.appendChild(planetValue)

const message = document.createElement('div')
message.style.background = 'rgba(255, 255, 255, 0.12)'
message.style.width = '50%'
message.style.color = 'white'
message.style.textAlign = 'center'
message.style.padding = '12px'
message.style.position = 'absolute'
message.style.top = '10px'
message.style.right = '170px'
message.textContent = 'Mass is required!'

const planetImgSrc = [
    {
        id: 'sun',
        image: 'images/sun.png'
     },
    {
         id: 'mercury',  
        image: 'images/mercury.png'
     },
    {
        id: 'venus',
        image: 'images/venus.png'
     },
    { 
        id: 'earth',
        image: 'images/earth.png'
     },
    {
        id: 'mars',
        image: 'images/mars.png'
     },
    {
        id: 'jupiter',
        image: 'images/jupiter.png'
     }, 
    {
        id: 'saturn',
        image: 'images/saturn.png'
     },
    {
        id: 'uranus',
        image: 'images/uranus.png'
     },
    {
        id: 'neptune',
        image: 'images/neptune.png'
     },
    {   id: 'moon',
        image: 'images/moon.png'
     }
    ]

    function appendImage(planetImgSrc) {
        for(let {id, image} of planetImgSrc) {
        if(select.value === id) {
        planetImg.src = image
        } 
    }
    image.appendChild(planetImg)
    }

    let valueEntered, weight, result, itemSelected

    function planetValueInNewton() {
    valueEntered = mass.value.trim()
    itemSelected = select.value
    result = (itemSelected === 'sun') ? weight = valueEntered * 293.0 : (itemSelected === 'mercury') ? weight = valueEntered * 3.7 : (itemSelected === 'venus') ? weight = valueEntered * 8.8 : (itemSelected === 'earth') ? weight = valueEntered * 9.8 : (itemSelected === 'mars') ? weight = valueEntered * 3.7 : (itemSelected === 'jupiter') ? weight = valueEntered * 24.7 : (itemSelected === 'saturn') ? weight = valueEntered * 10.5 : (itemSelected === 'uranus') ? weight = valueEntered * 9.0 : (itemSelected === "neptune") ? valueEntered * 11.7 : (itemSelected === 'moon') ? weight = valueEntered * 1.7 : ""
    return `${result.toFixed(2)}N`
    }

    select.addEventListener('change', () => {
        appendImage(planetImgSrc)
        planetName.textContent = select.value.toUpperCase()
        isMassEmpty()
    })

    button.addEventListener('click', () => {
        planetValue.textContent = planetValueInNewton()
        select.value = 'none'
        mass.value = ''
      })

      mass.addEventListener('blur', () => {
        let reg = /^[0-9]*$/gi
        if(reg.test(mass.value.trim())) {
            massMessage.textContent = ''
        } else if(mass.value.trim() === '') {
            massMessage.textContent = ''
        } else {
            massMessage.textContent = 'Mass entered should be in numbers'
        }
    })

    mass.addEventListener('input', () => {
        afterInput()
        setTimeout(beforeInput, 7000)
    })

     document.addEventListener('DOMContentLoaded', () => {
        beforeInput()
     })

      function isMassEmpty() {
        if(!mass.value) {
        main.removeChild(flexContainer)
        main.style.maxHeight = '100%'
        main.appendChild(message)
       } 
       if(mass.value.trim()) {
        main.appendChild(flexContainer)
        main.removeChild(message)
        } 
     }

    function beforeInput() {
        if((mass.value === '') && (select.value === 'none')) {
            flexContainer.removeChild(description)
            image.style.marginLeft = '9rem'
        } 
    }

    function afterInput() {
        if(mass.value !== '') {
            flexContainer.appendChild(description)
            image.style.marginLeft = '0rem'
        }
    }