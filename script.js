function calcularMedia() {
    let av1 = parseFloat(document.getElementById("av1").value);
    let av2 = parseFloat(document.getElementById("av2").value);
    let av3 = parseFloat(document.getElementById("av3").value);
    
    if (av1 >= 0 && av1 <= 10 && av2 >= 0 && av2 <= 10 && av3 >= 0 && av3 <= 10) {
        var nf = ((((av1 + av2) / 2) + av3) / 2);
    } else {
        alert("Somentes notas entre 0 e 10 são aceitas.");
    }

    // document.getElementById("resultado").innerHTML = nf.toFixed(1); // Aqui pega-se o valor da variável "nf" e coloca na div com id "resultado" no HTML
    
    if ((((av1 + av2) / 2)) < 4) {
        document.getElementById("resultado").innerHTML = "Reprovado, pois a média entre AV1 e AV2 foi menor que 4,0.";
    } else if (av3 < 4) {
        document.getElementById("resultado").innerHTML = "Reprovado, pois a nota da AV3 foi menor que 4,0.";
    } else if (nf < 5) {
        document.getElementById("resultado").innerHTML = "Reprovado, pois a média final foi menor que 5,0.";
    } else {
        document.getElementById("resultado").innerHTML = `Parabéns, você foi aprovado com nota ${nf.toFixed(1)}!`;
    }
}