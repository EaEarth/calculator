let sign = "+"

function display(obj){
    console.log("in display")
    let screen = document.getElementById("screen")
    let word = screen.textContent
    word += obj.currentTarget.id
    screen.innerHTML = word
}

function clear(){
    let screen = document.getElementById("screen")
    screen.innerHTML = ""
}

function changeSign(){
    let screen = document.getElementById("screen")
    let word = screen.textContent
    let num
    if(sign == "+"){
        sign = "-"
        num = parseFloat(word)
        num *= -1
        screen.innerHTML = num
    }else{
        sign = "+"
        let num = parseFloat(word)
        num*=-1
        screen.innerHTML = num
    }
}

let numberButton = document.getElementsByClassName("number")
for(let i=0; i<numberButton.length; ++i){
    numberButton[i].addEventListener("click", display)
}
document.getElementsByClassName("AC")[0].addEventListener("click",clear)
document.getElementById("plusOrMinus").addEventListener("click",changeSign)