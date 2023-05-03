function calcular() {
    let num = document.getElementById('num')
    let numero = Number(num.value)
    let res = document.getElementById('res')
    let tabuada = "";

    if (num.value == "") {
        alert('Coloque um número para continuar')

    } else {
        for(var c = 1; c <=10 ; c++)
        tabuada += numero + " x " + c + " = " + numero*c +"<br>"
        res.innerHTML = `${tabuada}`
    }
}