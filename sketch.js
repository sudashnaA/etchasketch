let container = document.querySelector("#container");
let button = document.querySelector("#changebutton")
let currentopacity = 1;
makeGrids(16,container);

// event listener which changes a grids color when the mouse is over it
container.addEventListener('mouseover', (event) => {
    if (event.target.id == "box" ){
            event.target.style.backgroundColor = getRandomColor();
            event.target.style.opacity = getOpacity();
        }
});

// button function to change canvas size
button.addEventListener('click', (event) => {
    let size = prompt("Please enter new grid size <= 100");

    if (size <= 100){
        removeGrids(container);
        makeGrids(size,container);
    }
});

// build the canvas which is size*size large
function makeGrids(size,container) {
    for (let i = 1; i <= size; i ++){
        let row = document.createElement("div");
        row.classList.add("boxcontainer");
        // add size amount of boxes to row
        for (let j = 1; j <= size; j++) {
            let box = document.createElement("div");
            box.classList.add("box")
            box.id = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

// returns random colour
function getRandomColor(){
    let red = getRandomRGB();
    let blue = getRandomRGB();
    let green = getRandomRGB();
    return `rgb(${red},${green},${blue})`
}

// gets a random value in the range of 0 and 255
function getRandomRGB(){
    var randomnumber = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return randomnumber
}

// Opacity starts at 1 and decrements by 10% until square is invisible
function getOpacity(){
    if (currentopacity > 0){
        currentopacity -= 0.1;
    }
    else{
        currentopacity = 1;
    }
    return currentopacity;
}

//clear container
function removeGrids(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

