function contar() {
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var resp = document.querySelector("p#resp");
    var res = document.querySelector("p#res");

    res.innerHTML = "";

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        resp.innerHTML = "[ERRO] Impossível de contar. Por favor, insere um número válido!";
        res.innerHTML = "";
    }
    else {
        let ini = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }
        if (ini < f) {
            // Contagem crescente
            for (var i = ini; i <= f; i+= p) {
                resp.innerHTML = "Contagem pronta!";
                res.innerHTML += i + " \uD83D\uDC49 ";
            }
        }
        else {
            // Contagem regressiva
            for (var i = ini; i >= f; i-= p) {
                resp.innerHTML = "Contagem pronta!";
                res.innerHTML += i + " \uD83D\uDC49 ";
            }
        }
        res.innerHTML += "\uD83C\uDFC1";
    }
}