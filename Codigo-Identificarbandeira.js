function identificarBandeira(numeroCartao) {
    const prefixo = numeroCartao.slice(0, 6);
    const prefixo4 = numeroCartao.slice(0, 4);
    const prefixo3 = numeroCartao.slice(0, 3);
    const prefixo2 = numeroCartao.slice(0, 2);
    const prefixo1 = numeroCartao.slice(0, 1);

    const numero = parseInt(prefixo);
    const n3 = parseInt(prefixo3);
    const n2 = parseInt(prefixo2);

    if (prefixo1 === '4') {
        return 'Visa';
    } else if (
        (n2 >= 51 && n2 <= 55) ||
        (numero >= 222100 && numero <= 272099)
    ) {
        return 'Mastercard';
    } else if (
        ['4011', '4312', '4389', '4514', '4576', '5041', '5066', '5090', '6277', '6362', '6363'].includes(prefixo4)
    ) {
        return 'Elo';
    } else if (prefixo2 === '34' || prefixo2 === '37') {
        return 'American Express';
    } else if (
        prefixo4 === '6011' ||
        prefixo2 === '65' ||
        (n3 >= 644 && n3 <= 649)
    ) {
        return 'Discover';
    } else if (prefixo4 === '6062') {
        return 'Hipercard';
    } else if (
        (n3 >= 300 && n3 <= 305) ||
        prefixo2 === '36' ||
        prefixo2 === '38'
    ) {
        return 'Diners Club';
    } else if (prefixo4 === '2014' || prefixo4 === '2149') {
        return 'Enroute';
    } else if (parseInt(prefixo4) >= 3528 && parseInt(prefixo4) <= 3589) {
        return 'JCB';
    } else if (prefixo4 === '8699') {
        return 'Voyager';
    } else if (prefixo2 === '50') {
        return 'Aura';
    } else {
        return 'Bandeira desconhecida';
    }
}

// Testes:
console.log(identificarBandeira("4111111111111111")); // Visa
console.log(identificarBandeira("5500000000000004")); // Mastercard
console.log(identificarBandeira("5066991111111118")); // Elo
console.log(identificarBandeira("371449635398431"));  // American Express
console.log(identificarBandeira("6011111111111117")); // Discover
console.log(identificarBandeira("6062825624254001")); // Hipercard
console.log(identificarBandeira("30569309025904"));   // Diners Club
console.log(identificarBandeira("201400000000009"));  // Enroute
console.log(identificarBandeira("3530111333300000")); // JCB
console.log(identificarBandeira("8699123456789012")); // Voyager
console.log(identificarBandeira("5078601870000127981")); // Aura
