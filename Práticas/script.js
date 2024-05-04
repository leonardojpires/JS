var res = document.querySelector("div#res");

function gerar() {
    res.innerHTML = ""
    var randomNumber = generateRandomNumber();
    res.innerHTML += `<p>O número gerado foi: <strong>${randomNumber}</strong></p>`;

    let newInput = document.createElement("input");
    newInput.type = "button";
    newInput.value = "Mostrar resultados";
    newInput.onclick = mostrar;
    res.appendChild(newInput);

}



function generateRandomNumber() {
    return Math.floor(Math.random() * 1001);
}