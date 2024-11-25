let container = document.querySelector("#container");
let button = document.querySelector("#changebutton")
makeGrids(16,container);

container.addEventListener('mouseover', (event) => {
    if (event.target.id == "box" )
        event.target.style.backgroundColor = "rgb(120,0,0)";
});

button.addEventListener('click', (event) => {
    let size = prompt("Please enter new grid size <= 100");

    if (size <= 100){
        removeGrids(container);
        makeGrids(size,container);
    }
});

function makeGrids(size,container) {
    for (let i = 1; i <= size; i ++){
        let row = document.createElement("div");
        row.classList.add("boxcontainer");
        for (let j = 1; j <= size; j++) {
            let box = document.createElement("div");
            box.classList.add("box")
            box.id = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function removeGrids(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

