function lineThrough (){
    const unorderedItem = document.querySelector('#arguments li')
    unorderedItem.style.textDecoration = 'line-through'
}

lineThrough()

function setImage (id, url){
    const image = document.querySelector(id)
    image.src = url
}

setImage ("#image-1", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*")
setImage ("#image-2", "https://cloudinary-a.akamaihd.net/ufn/image/upload/u7cdzxvxu69pmubmtltc.jpg")
setImage ("#image-3", "https://www.proflowers.com/blog/wp-content/uploads/2018/05/20-annual-flowers-hero.jpeg")

function removesLastLi (){
    let unorderedItem2 =document.querySelector('ul')
    let last = unorderedItem2.lastChild;
    last.remove();
    last = unorderedItem2.lastChild;
    last.remove()
}

removesLastLi()
removesLastLi()

function changeSize (size, id){
    const text = document.querySelector(id)
    text.style.fontSize = size
}

changeSize ('20px', 'h1')

function passElement (element){
    const unorderedItem = document.querySelector('#arguments')
    unorderedItem.appendChild(element)
}

const image = document.createElement('img')
image.src = "https://www.proflowers.com/blog/wp-content/uploads/2018/05/20-annual-flowers-hero.jpeg"

passElement (image)

function imgSize (image){
    image.style.height = '30px'
}
const image1 = document.querySelector('#image-1')
imgSize (image1)

function invisible (element){
    element.classList.add('invisible')
}
const element1 = document.querySelector("#thing-1")
invisible (element1)

function addText(text){
    const newLi = document.createElement('li')
    newLi.innerText = text
    passElement(newLi)
}

addText('this is a new <li>')

function newHeader(headerSize, text){
    const size = 'h'+ headerSize
    const header = document.createElement(size)
    header.innerText = text
    passElement(header)
}

newHeader ('3', 'here is a new header')


