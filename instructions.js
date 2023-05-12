const backgroundImg1 = new Image()
backgroundImg1.onload = function() {
    ctx.drawImage(backgroundImg1, 0, 0, canvas.width, canvas.height)
};
backgroundImg1.src = 'resources/images/space.png'

const h3 = document.createElement('h2')
h3.style.textAlign = "center";
h3.innerHTML = "Work is stressful.<br><span style='font-size:24px'>Guide you're overworked player right and left using the arrow keys (<-- left, right -->).</span><br><span style='font-size:24px'>Gather the RED stressed emojis to build your work tolerance, while avoiding the WHITE corporate imposed yoga classes!</span>"
h3.style.padding = "30px";
canvas.parentNode.insertBefore(h3, canvas.nextSibling)

const button3 = document.createElement('button')
button3.innerText = 'Back'
button3.className = 'glow-on-hoverrr'
canvas.parentNode.appendChild(button3)
button3.addEventListener('click', function() {
  window.location.reload()
})

