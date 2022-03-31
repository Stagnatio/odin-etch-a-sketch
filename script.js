/*const box = document.createElement("div");
box.setAttribute("id", "div1");*/
const container = document.getElementById("container");

/*let arr = [];*/

for (let i=0; i<16;i++) {
    let divguts = document.createElement('div');
    divguts.setAttribute("class", "item");
    let div = document.getElementById("container")
        .appendChild(divguts);
    /*let info = document.createTextNode(`${i+1}`);
    div.appendChild(info);
    arr.push(div);*/

    divguts.addEventListener("mouseover", colorChange);
}
/*
square.addEventListener("mouseenter", changecolor(arr[i]) {
    target.style.color = "purple";
})
*/

function colorChange() {
    this.setAttribute("style", "background-color: green;");
}