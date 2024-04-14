function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    var hue;
    if (hora >= 9 && hora < 21) {
        var progress = (hora - 9) / 12; // Values between 0 and 1
        hue = 60 + (240 - 60) * progress; // (240 - 60) - Number of colors the transition has to go through until reach the 21:00, multiplying progressively by the progres (which is a value between 0 and 1) and then add that into the original color code in the HUE (60 for yellow)
    }
    else {
        if (hora < 9) {
        hora += 24; // Turns the hours after midnight (00:00) into hours "like before" (00:00 -> 25, 01:00 -> 26...)
    }
    var progress = (hora - 21) / 4;
    hue = 240 + (60 - 240) * progress;
}

    document.body.style.background = `hsl(${hue}, 50%, 50%)`;


    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "fotomanha.png";
    }
    else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = "fototarde.png";

    }
    else {
        // BOA NOITE
        img.src = "fotonoite.png";
    }


}