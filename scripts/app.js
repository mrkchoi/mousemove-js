// Set DOM variables
let container = document.querySelector('.container-full');
let text = document.querySelector('.header');
let walk = 10;
let walk2 = 1000;



// Set functions
function changeShadow(e) {
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    let x = e.offsetX; 
    let y = e.offsetY;
    
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / containerWidth * walk) - (walk / 2));
    const yWalk = Math.round((y / containerHeight * walk) - (walk / 2));
    const xWalk2 = Math.round((x / containerWidth * walk2) - (walk2 / 2));
    const yWalk2 = Math.round((y / containerHeight * walk2) - (walk2 / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,0,.8),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,0,.8),
        ${yWalk}px ${xWalk}px 0 rgba(0,0,255,.8),
        ${yWalk * -1}px ${xWalk}px 0 rgba(255,255,0,.8)
    `;
    container.style.backgroundColor = `
        rgba(${xWalk2 * -1},${yWalk2 * -1},${yWalk2}, .2)
    `;

    console.log(xWalk,yWalk);
}

// Set event listeners
container.addEventListener('mousemove', changeShadow);