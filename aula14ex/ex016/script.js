function contar() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var passo = parseInt(document.getElementById("passo").value);
    var resp = document.querySelector("p#resp");
    var res = document.querySelector("p#res");

    resp.innerHTML = "";

    if (!inicio || !fim || !passo || passo <= 0 && inicio > fim) {
        resp.innerHTML = "[ERRO] Impossível de contar. Por favor, insere um número válido!";
        res.innerHTML = "";
    }
    else {
        for (var i = inicio; i <= fim; i+= passo) {
            resp.innerHTML = "Contagem pronta!";
            res.innerHTML += i + " \uD83D\uDC49 ";
        }
        res.innerHTML += "\uD83C\uDFC1";
    }




}