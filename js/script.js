function getById(id) {
    return document.getElementById(id);
}

function textoMaiusculo(texto) {
    return /[A-Z]/.test(texto);
}

function TextoSemAcento(texto) {
    return /[áÁãÃâÂàÀéÉêÊíÍóÓõÕôÔöÖúÚÜüçÇî]/.test(texto);
}

function CaracteresEspeciais(texto) {
    return /[^a-zA-Z0-9 ]/.test(texto);
}

function criptografarTexto(texto) {
    var textoCriptografado = [];
    var novoTexto;
    for (var cont = 0; cont < texto.length; cont++) {
        if (texto[cont] == 'a') {
            textoCriptografado[cont] = 'ai';
        } else if (texto[cont] == 'e') {
            textoCriptografado[cont] = 'enter';
        } else if (texto[cont] == 'i') {
            textoCriptografado[cont] = 'imes';
        } else if (texto[cont] == 'o') {
            textoCriptografado[cont] = 'ober';
        } else if (texto[cont] == 'u') {
            textoCriptografado[cont] = 'ufat';
        } else {
            textoCriptografado[cont] = texto[cont];
        }

    }
    novoTexto = textoCriptografado.join("");
    return novoTexto;
}

function pegarTexto() {
    getById("msgerro").innerHTML = "";
    var texto = getById('entrada');
    if (texto.value == '') {
        getById("msgerro").innerHTML = "&#9888; Tente digitar alguma coisa primeiro";
    } else if (textoMaiusculo(texto.value) || TextoSemAcento(texto.value) || CaracteresEspeciais(texto.value)) {
        getById("msgerro").innerHTML = "&#9888; Apenas letras minúsculas, sem acento e sem caracteres especiais";
    } else {
        var textoCriptografado = criptografarTexto(texto.value);
        getById("txtsaida").innerHTML = '<textarea id="saida" rows="15" cols="40"></textarea>';
        getById("saida").innerHTML = textoCriptografado;
        getById("botao").innerHTML = '<button id="btcopia" onclick="copiarTexto()">Copiar texto</button>';
        getById('imgsaida').remove();
        getById('h3saida').remove();
        getById('psaida').remove();
    }
}

function copiarTexto() {
    let textoCopiado = getById("saida");
    textoCopiado.select();
    // textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    getById("msgsucesso").innerHTML = 'Seu texto foi copiado com #sucesso';
}

function descripito() {
    var texto = getById("entrada").value;
    //var texto = novoTexto.replace(' ', '.')
    var desCriptografar = [];
    var desTexto = [];

    for (var cont = 0; cont < texto.length; cont++) {

        if (texto[cont] === "a" && texto[cont + 1] === "i") {
            desCriptografar[cont] = "a";
            console.log(texto + " a ");
        } else if (texto[cont] === "e" && texto[cont + 1] === "n" && texto[cont + 2] === "t" && texto[cont + 3] === "e" && texto[cont + 4] === "r") {
            desCriptografar[cont] = "e";
            console.log(texto + " e");
        } else if (texto[cont] === "i" && texto[cont + 1] === "m" && texto[cont + 2] === "e" && texto[cont + 3] === "s") {
            desCriptografar[cont] = "i";
            console.log(texto + " i");
        } else if (texto[cont] === "o" && texto[cont + 1] === "b" && texto[cont + 2] === "e" && texto[cont + 3] === "r") {
            desCriptografar[cont] = "o";
            console.log(texto + " o");
        } else if (texto[cont] === "u" && texto[cont + 1] === "f" && texto[cont + 2] === "a" && texto[cont + 3] === "t") {
            desCriptografar[cont] = "u";
            console.log(texto + " u");
        } else if (texto[cont] === " ") {
            desCriptografar[cont] = " ";
        } else {
            desCriptografar[cont] = texto[cont];
        }
    }
    desTexto = desCriptografar.join("");
    console.log(desTexto + 'destexo');
    console.log(desCriptografar);
    return desTexto;
    //return desTexto;
}