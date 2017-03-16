var colors = ["red", "blue", "yellow", "green", "orange", "black", "cyan", "magenta"]

function rand(max) { 
    return Math.floor(Math.random() * max)
}
function changeColor() {
    var col = document.getElementById("changecolor");
    const color = `rgb(${rand(256)},${rand(256)},${rand(256)})`
    // col.style.backgroundColor = colors[Math.floor((Math.random()*8)+1)];
    console.log({color})
    col.style.backgroundColor =  color
}