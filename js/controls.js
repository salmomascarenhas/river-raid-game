let dx 
let dy 
let px 
let py 
let vel
let obj
let frameRate

function initControls () {
        obj = document.getElementById('ship')
        dx = 0
        dy = 0
        vel = 10
        // 30 fps
        frameRate = 1000 / 30 

        //inital position from the ship.
        px = document.getElementById('game-board').offsetWidth / 2 //half of the game board
        py = document.getElementById('game-board').offsetHeight - obj.offsetHeight / 2  //50px from the bottom
        
        
        document.addEventListener('keydown', keyDown)
        document.addEventListener('keyup', keyUp)
        obj.style.left = 50 + '%'
        obj.style.bottom = -60 + 'px'
        obj.style.transform = 'translate(-50%, -50%)'

        setInterval(move, frameRate)
}

function keyDown (e) {  
    if (e.key === 'ArrowLeft') {
        dx = -1
    } else if (e.key === 'ArrowRight') {
        dx = 1
    } else if (e.key === 'ArrowUp') {
        dy = -1
    } else if (e.key === 'ArrowDown') {
        dy = 1
    }
}

function keyUp (e) {  

    if (e.key === 'ArrowLeft') {
        dx = 0
    } else if (e.key === 'ArrowRight') {
        dx = 0
    } else if (e.key === 'ArrowUp') {
        dy = 0
    } else if (e.key === 'ArrowDown') {
        dy = 0
    }
}

function move () {
    px += dx * vel
    py += dy * vel

    obj.style.left = px + 'px'
    obj.style.top = py + 'px'
}

window.addEventListener('load', initControls)
