let sign = "+"
let dot = false
let operand = ""
let operator = ""
let state = "operand"
let operatingButton = ""

function display(obj){
    let screen = document.getElementById("screen")
    let word = screen.textContent
    if(word == "ERROR" || state == "operator") word = ""
    if( operatingButton != ""){
        operatingButton.style.backgroundColor = "whitesmoke"
        operatingButton = ""
    }
    if(word.length > 10) return
    if(obj.currentTarget.id == "." ){
        if(dot) return
        dot = true
    }
    word += obj.currentTarget.id
    screen.innerHTML = word
    state = "operand"
}

function show(num){
    let screen = document.getElementById("screen")
    if( isNaN(num) || num == Infinity ){
        clear()
        screen.innerHTML = "ERROR"
        return
    }
    if(num.toString().length > 10) num = num.toExponential()
    screen.innerHTML = num
    return num
}

function clear(){
    let screen = document.getElementById("screen")
    screen.innerHTML = ""
    sign = "+"
    dot = false
    operand = ""
}

function changeSign(){
    let screen = document.getElementById("screen")
    let word = screen.textContent
    let num = parseFloat(word)
    if( isNaN(num) ) return
    if(sign == "+"){
        sign = "-"
        num *= -1
        screen.innerHTML = num
    }else{
        sign = "+"
        num*=-1
        screen.innerHTML = num
    }
}

function operate(obj){
    let screen = document.getElementById("screen")
    let word = screen.textContent
    let num = parseFloat(word)
    if( isNaN(num) )return
    if( obj.currentTarget.id == "equal" ){
        if(operator == "") return
        else if(operator == "+") num =show(operand + num)
        else if(operator == "-") num =show(operand - num)
        else if(operator == "*") num =show(operand * num)
        else if(operator == "/") num =show(operand / num)
        operator = ""
    }else if( obj.currentTarget.id == "plus" ){
        if(operator != "" && state == "operand"){
            if(operator == "+") num =show(operand + num)
            else if(operator == "-") num =show(operand - num)
            else if(operator == "*") num =show(operand * num)
            else if(operator == "/") num =show(operand / num)
        }
        operator = "+"
    }else if( obj.currentTarget.id == "minus" ){
        if(operator != "" && state == "operand"){
            if(operator == "+") num =show(operand + num)
            else if(operator == "-") num =show(operand - num)
            else if(operator == "*") num =show(operand * num)
            else if(operator == "/") num =show(operand / num)
        }
        operator = "-"
    }else if( obj.currentTarget.id == "multiply" ){
        if(operator != "" && state == "operand"){
            if(operator == "+") num =show(operand + num)
            else if(operator == "-") num =show(operand - num)
            else if(operator == "*") num =show(operand * num)
            else if(operator == "/") num =show(operand / num)
        }
        operator = "*"
    }else if( obj.currentTarget.id == "divide" ){
        if(operator != "" && state == "operand"){
            if(operator == "+") num =show(operand + num)
            else if(operator == "-") num =show(operand - num)
            else if(operator == "*") num =show(operand * num)
            else if(operator == "/") num =show(operand / num)
        }
        operator = "/"
    }
    operand = num
    state = "operator"
    dot = false
    if( operatingButton != ""){
        operatingButton.style.backgroundColor = "whitesmoke"
    }
    if( obj.currentTarget.id == "equal"){
        operatingButton = ""
    } else {
        obj.currentTarget.style.backgroundColor = "rgb(200 ,200 ,200)"
        operatingButton = obj.currentTarget
    }
}

let numberButton = document.getElementsByClassName("number")
for(let i=0; i<numberButton.length; ++i){
    numberButton[i].addEventListener("click", display)
}
let operatorButton = document.getElementsByClassName("operator")
for(let i=0; i<operatorButton.length; ++i){
    operatorButton[i].addEventListener("click", operate)
}
document.getElementsByClassName("AC")[0].addEventListener("click",clear)
document.getElementById("plusOrMinus").addEventListener("click",changeSign)