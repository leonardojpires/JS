function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifica os dados e tenta novamente!");
    }
    else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var género = "";
        if (fsex[0].checked) {
            género = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "criança-h.png");
            }
            else if (idade < 21) {
                img.setAttribute("src", "jovem-h.png");
            }
            else if (idade < 50) {
                img.setAttribute("src", "adulto-h.png");
            }
            else {
                img.setAttribute("src", "idoso-h.png");
            }
        }
        else if (fsex[1].checked) {
            género = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "criança-m.png");
            }
            else if (idade < 21) {
                img.setAttribute("src", "jovem-m.png");
            }
            else if (idade < 50) {
                img.setAttribute("src", "adulto-m.png");
            }
            else {
                img.setAttribute("src", "idoso-m.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${género} com ${idade} anos`;
        res.appendChild(img);
    }
}