console.log('%c HI', 'color: firebrick')
const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const ulContainer = document.querySelector.apply("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray;

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)
function getImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(images => {
            const imgs = images.message
            let imgsArray = createImgElement(imgs)
            renderImg(imgsArray)
        })
}

function createImgElement(imgs) {
    return img.map((img) => {
        let i = `<img src=${img}>`
        return i
    });
}

function renderImg(imgsArray) {
    imgsArray.array.forEach(element => {
        container.innerHTML += element
    })
}
function renderImg(element) {
    ulContainer.innerHTML += element
}

function getBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            breedsArray = Object.keys(breeds.message)
            const breedsLis = createLiElement(breedsArray)
        })

}

function createLiElement(breedsArray) {
    return breedsArray.map((breed) => {
        let li = `<li> ${breed}</li>`
        return li
    })

}

function renderLis(breedsLis) {
    breedsLis.forEach(element => {
        renderElement(element)
    })
}

function handleClick(event) {
    if (event.target.nodeName === 'Li') {
        if (event.target.style.color === 'red') {
            event.target.style.color = 'black'
        } else {
            event.target.style.color = 'red'
        }
    }
}
function handleChange(event) {
    const letter = event.target.value
    // filter out breeds that start with the letter
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLis)
}


// getImages()
getBreeds()