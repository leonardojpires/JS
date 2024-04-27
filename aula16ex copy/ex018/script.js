var nmr = [];
var soma = 0;
var media = 0;
var ninput = document.querySelector("input#nmr");

function adicionar() {
    var num = parseInt(document.getElementById("nmr").value);
    var tab = document.getElementById("somatab");
    if (isNaN(num) || num > 100 || num < 0 || nmr.includes(num))  {
        alert("Valor inválido ou já encontrado na lista.");
    }
    else {
        nmr.push(num);
        let item = document.createElement("option");
        item.text = `Valor ${num} adicionado.`;
        tab.appendChild(item);
        soma += num;
        media = soma / nmr.length;
    }
    
    ninput.value = "";
    ninput.focus();
}

function finalizar() {
    var res = document.getElementById("res");
    if (nmr.length === 0) {
        alert("Nenhum número foi adicionado.");
    }
    else {
        res.innerHTML = "";
        res.innerHTML += `<br>Ao todo, temos ${nmr.length} números cadastrados.`;
        res.innerHTML += `<br>O maior valor encontrado foi ${Math.max(...nmr)}`;
        res.innerHTML += `<br>O menor valor encontrado foi ${Math.min(...nmr)}`;
        res.innerHTML += `<br>Ao somar todos os valores, temos ${soma}`;
        res.innerHTML += `<br>A média dos valores digitados é ${media.toFixed(2)}`;
    }
}
