let text = document.getElementById("text");
let copy = document.getElementById("copy");
let change = document.getElementById("change");
change.addEventListener("click",function(){
    let random = Math.floor(Math.random()*16777215)
    let randomhex = "#"+random.toString(16)
    text.innerHTML = randomhex
    document.body.style.backgroundColor = randomhex
})