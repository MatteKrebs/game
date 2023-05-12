//main menu elements
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const img = new Image()
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    ctx.font = "18px Courier New"
    ctx.fillStyle = 'white'
    ctx.fillText("Millennials at Work", 50, 40)
}
img.src = 'resources/images/space.png'

// Create START, MUSIC buttons and instructions
const button = document.createElement('button')
button.innerText = 'Start Game'
button.className = 'glow-on-hover'
canvas.parentNode.appendChild(button)

const instructionsBtn = document.createElement('button')
instructionsBtn.innerText = 'Instructions'
instructionsBtn.className = 'glow-on-hoverrr'
canvas.parentNode.appendChild(instructionsBtn)

const musicButton = document.createElement('button')
musicButton.className = 'music-btn'
canvas.parentNode.appendChild(musicButton)
//MUSIC!!!!
const audio = new Audio('resources/sounds/password-infinity.mp3')
const musicOn = document.querySelector('.music-btn')
musicOn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
})

//Start the game by clearing everything
button.addEventListener('click', function() {
    // Clear the canvas
    
    button.remove()
    musicButton.remove()
    instructionsBtn.remove()
    
    //audio.pause()

    //load the game
    const script = document.createElement('script')
    script.src = 'game.js'
    document.body.appendChild(script)
})

//Instructions menu
instructionsBtn.addEventListener('click', function() {
  
  button.remove()
  musicButton.remove()
  instructionsBtn.remove()

  const script2 = document.createElement('script')
  script2.src = 'instructions.js'
  document.body.appendChild(script2)
})