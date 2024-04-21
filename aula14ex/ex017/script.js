function calcular() {
    var nmr = parseInt(document.getElementById("nmr").value);
    var tab = document.getElementById("seltab");

    if (!nmr && nmr !== 0) {
        window.alert("Por favor, digita um número!");
    }
    else {
        let c = 1;
        tab.innerHTML = "";
        while (c <= 10) {
            let resp = nmr * c;
            let item = document.createElement("option");
            item.text = `${nmr} * ${c} = ${resp}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}