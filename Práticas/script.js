var res = document.querySelector("div#res");
var hasShown = false;
let image = document.createElement("img");

function gerar() {
    res.innerHTML = ""
    let randomNumber = generateRandomNumber();
    

    res.innerHTML += `<p>O número gerado foi: <strong>${randomNumber}</strong></p>`;
    res.innerHTML += `<p><input type="button" value="Mostrar resultados" onclick="mostrar(${randomNumber})"></p>`;
    hasShown = false;
}

function mostrar(n) {
    if (hasShown == false) {
        let root = Math.sqrt(n).toFixed(2);
        let factorial = 1;
        let c = n;
        image.setAttribute("id", "foto");

        while (c > 0) {
            factorial *= n;
            c--
        }
        res.innerHTML += `<p>A raiz quadrada deste número é <strong>${root}</strong></p>`
    
        if (factorial === Infinity) {
            res.innerHTML += "<p>O valor do fatorial deste número é muito grande para ser calculado!</p>";
        }
        else {
            res.innerHTML += `<p>O fatorial deste número é <strong>${factorial}</strong></p>`;
        }
        res.innerHTML += "<p>Mas olha só esta imagem</p>"

        if (n % 2 == 0) {
            image.setAttribute("src", "images/img_par.jpg");
        }
        else {  
            image.setAttribute("src", "images/img_impar.jpg");
        }

        res.appendChild(image);

        hasShown = true;
    }

}

function generateRandomNumber() {
    return Math.floor(Math.random() * 1001);
}