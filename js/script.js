function read(num) {
    let valor = document.getElementById("results").innerHTML
    document.getElementById("results").innerHTML = valor + num
}

function clean() {
    document.getElementById("results").innerHTML = ""
}

function backspace() {
    let valor = document.getElementById("results").innerHTML
    document.getElementById("results").innerHTML = valor.substring(0, valor.length -1)
}

function calcular() {
    let total = document.getElementById("results").innerHTML

    if(total) {
        document.getElementById("results").innerHTML = eval(total)
    }else{
        document.getElementById("results").innerHTML = ""
    }
}

function mode() {
    document.body.classList.toggle("dark")
    document.calculadora.classList.add("dark")
}