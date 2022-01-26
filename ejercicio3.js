// El ingreso de numeros
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

//botones
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");

//resultado
const resultado = document.querySelector(".resultado");

btnSumar.addEventListener("click", () => {
    let suma = +valor1.value + +valor2.value;
    resultado.textContent = `${suma}`
});
btnRestar.addEventListener("click", () => {
    let resta = +valor1.value - +valor2.value;
    if(resta < 0){
        resultado.textContent = "0"
        return
    }
    resultado.textContent = `${resta}`
});
