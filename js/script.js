function getById(id) {
    return document.getElementById(id);
}

//  Deve funcionar apenas com letras minúsculas
function textoMaiusculo(texto) {
    return /[A-Z]/.test(texto);
}

//Não devem ser utilizado letras com acentos
function TextoSemAcento(texto) {
    return /[áÁãÃâÂàÀéÉêÊíÍóÓõÕôÔöÖúÚÜüçÇî]/.test(texto);
}

// Não devem ser utilizado caracteres especiais
function CaracteresEspeciais(texto) {
    return /[^a-zA-Z0-9 ]/.test(texto);
}

// Deve ser possível converter uma palavra para a versão criptografada
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

// capturar texto digitado pelo usuario
function pegarTexto() {
    getById("msgerro").innerHTML = "";
    var texto = getById('entrada');
    if (texto.value == '') {
        getById("msgerro").innerHTML = "Tente digitar alguma coisa primeiro";
    } else if (textoMaiusculo(texto.value) || TextoSemAcento(texto.value) || CaracteresEspeciais(texto.value)) {
        getById("msgerro").innerHTML = '</br>Apenas letras minúsculas, sem acento e sem caracteres especiais</br>Deseja converter o seu texto?<p class="btajuda" onclick="converterTexto()">Converter</p>';
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

// função / atalho copiar texto criptografado
function copiarTexto() {
    let textoCopiado = getById("saida");
    textoCopiado.select();
    document.execCommand("copy");
    getById("msgsucesso").innerHTML = 'Seu texto foi copiado com sucesso';
}
// Jogando na tela o texto Descriptografado
function textoDescriptado(texto) {
    getById("msgsucesso").innerHTML = ' ';
    if (document.querySelectorAll("textarea").length == 1) {
        getById('imgsaida').remove();
        getById('h3saida').remove();
        getById('psaida').remove();
        getById("txtsaida").innerHTML = '<textarea id="saida" rows="15" cols="40"></textarea>';
        getById("botao").innerHTML = '<button id="btcopia" onclick="copiarTexto()">Copiar texto</button>';
        var tela = getById("saida");
        tela.value = texto;
    } else if (document.querySelectorAll("textarea").length >= 2) {
        getById("msgsucesso").innerHTML = ' ';
        var tela = getById("saida");
        tela.value = texto;
    }


}

//Retornar uma palavra criptografada para a versão original.
function descripito() {
    var texto = getById("entrada").value;
    var desCriptografar = [];
    var textoDesCriptografado = [];

    for (var cont = 0; cont < texto.length; cont++) {
        if (texto[cont] === "a" && texto[cont + 1] === "i") {
            desCriptografar[cont] = "a";
            cont++;
        } else if (texto[cont] === "e" && texto[cont + 1] === "n" && texto[cont + 2] === "t" && texto[cont + 3] === "e" && texto[cont + 4] === "r") {
            desCriptografar[cont] = "e";
            cont = cont + 4;
        } else if (texto[cont] === "i" && texto[cont + 1] === "m" && texto[cont + 2] === "e" && texto[cont + 3] === "s") {
            desCriptografar[cont] = "i";
            cont = cont + 3;
        } else if (texto[cont] === "o" && texto[cont + 1] === "b" && texto[cont + 2] === "e" && texto[cont + 3] === "r") {
            desCriptografar[cont] = "o";
            cont = cont + 3;
        } else if (texto[cont] === "u" && texto[cont + 1] === "f" && texto[cont + 2] === "a" && texto[cont + 3] === "t") {
            desCriptografar[cont] = "u";
            cont = cont + 3;
        } else if (texto[cont] === " ") {
            desCriptografar[cont] = " ";
        } else {
            desCriptografar[cont] = texto[cont];
        }
    }
    textoDesCriptografado = desCriptografar.join("");
    textoDescriptado(textoDesCriptografado);

}

function converterTexto() {
    var texto = getById('entrada').value;
    var textoconvertido = texto.normalize("NFD").replace(/[^a-zA-Z0-9-' ']/g, "").toLowerCase();

    getById('entrada').value = textoconvertido;
}