//main menu
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

//main meny h1
const h1 = document.createElement('h1')
h1.innerHTML = "Psycho Game"
canvas.parentNode.insertBefore(h1, canvas.nextSibling)

//main menu img
const img = new Image()
img.onload = function() {
    ctx.drawImage(img, 0, 0)
};
img.src = 'resources/images/main-menu.jpg'

// Create START button element
const button = document.createElement('button')
button.innerText = 'Start Game'
// Set button class
button.className = 'glow-on-hover'
// Append start button to canvas
canvas.parentNode.appendChild(button)


const musicButton = document.createElement('button')

musicButton.className = 'music-btn'
canvas.parentNode.appendChild(musicButton)




