function popUp() {
    dimension = prompt("What size would you like the grid? (2-100)");
    document.getElementById("container").innerHTML = "";
    createGrid(dimension);
}

function createGrid(dim) {
    let container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;

    for (let i=0; i<dim; i++) {
        for (let j=0; j<dim; j++) {
            let div = document.createElement('div');
            div.setAttribute("class", "item");

            document.getElementById("container").appendChild(div);
        
            div.addEventListener("mouseover", colorChange);
        }
    }
}

function colorChange() {
    this.setAttribute("style", "background-color: green;");
}