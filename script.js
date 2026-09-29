function calcular() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    let resultado;

    if (x === 0 && y === 0) {
        resultado = "Origem";
    }
    else if (x === 0) {
        resultado = "Eixo Y";
    }
    else if (y === 0) {
        resultado = "Eixo X";
    }
    else if (x > 0 && y > 0) {
        resultado = "Q1";
    }
    else if (x < 0 && y > 0) {
        resultado = "Q2";
    }
    else if (x < 0 && y < 0) {
    resultado = "Q3";
    }
    else if (x > 0 && y < 0) {
    resultado = "Q4";
    }

    document.getElementById("resultado").innerText = resultado;
    
}