// fonction to get random number 
function rand(max) { 
    return Math.floor(Math.random() * max)
}

//
function changeColor() {
    var col = document.getElementById("changecolor");
    const color = `rgb(${rand(256)},${rand(256)},${rand(256)})`
    console.log({color})
    col.style.backgroundColor =  color
}
function hello(){
    alert ("hello word")
}