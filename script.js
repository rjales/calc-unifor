function calcularMedia() {
    let av1 = parseFloat(document.getElementById("av1").value.replace(",", "."));
    let av2 = parseFloat(document.getElementById("av2").value.replace(",", "."));
    let av3 = parseFloat(document.getElementById("av3").value.replace(",", "."));

    if (av1 >= 0 && av1 <= 10 && av2 >= 0 && av2 <= 10 && av3 >= 0 && av3 <= 10) {
        var notaFinal = ((((av1 + av2) / 2) + av3) / 2);
    } else {
        alert("Somente números entre 0 e 10 são aceitos.");
    }

    if ((((av1 + av2) / 2)) < 4) {
        document.getElementById('resultado').innerHTML = "Reprovado, pois a média entre AV1 e AV2 foi menor que 4,0.";
    } else if (av3 < 4) {
        document.getElementById('resultado').innerHTML = "Reprovado, pois a nota da AV3 foi menor que 4,0.";
    } else if (notaFinal < 5) {
        document.getElementById('resultado').innerHTML = "Reprovado, pois a média final foi menor que 5,0.";
    } else {
        document.getElementById('resultado').innerHTML = `Parabéns, você foi aprovado com nota ${notaFinal.toFixed(1)}!`;
    }
}