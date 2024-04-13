var idade = 18;
console.log(`Tu tens ${idade} anos.`);
if (idade < 16) {
    console.log("Não pode tirar carta de condução");
}
else if (idade < 18) {
    console.log("Pode tirar carta de motociclos");
}
else {
    console.log("Pode tirar carta de várias categorias");
}