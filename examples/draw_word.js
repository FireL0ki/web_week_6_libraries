// alert('is this working')  // good way to check if JS is connected to html page

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let input = document.querySelector('#image-text')
input.disabled = true

let image = new Image()
image.src = 'shire.jpg'

image.addEventListener('load', function() {
    context.drawImage(image, 0, 0)
    input.disabled = false
})

input.addEventListener('input', function() {
    let text = this.value  // this refers to what made the event, in this case, the input
    // context.fillStyle =
    context.font = '20px Courier'
    context.drawImage(image, 0, 0)  // redraw image to 'erase' (draw over) prior text upon new input
    context.fillText(text, 10, 75)
})

