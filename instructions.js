const backgroundImg1 = new Image()
backgroundImg1.onload = function() {
    ctx.drawImage(backgroundImg1, 0, 0, canvas.width, canvas.height)
};
backgroundImg1.src = 'resources/images/space.png'

const h3 = document.createElement('h2')
h3.style.textAlign = "center";
h3.innerHTML = "The rules are simple:<br><span style='font-size:24px'>catch as many stressed emojis as you can.</span><br><span style='font-size:20px'>Good luck</span>"
h3.style.padding = "30px";
canvas.parentNode.insertBefore(h3, canvas.nextSibling)