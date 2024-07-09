document.addEventListener('DOMContentLoaded', function () {
    function validarTexto(texto) {
        var caractespc = /^[a-z\s]*$/;
        if (!caractespc.test(texto)) {
            alert("El texto contiene caracteres especiales, acentos o mayúsculas. Por favor, ingrese solo letras minúsculas y sin acentos.");
            return false;
        }
        return true;
    }

    function encriptar() {
        var texto = document.getElementById("textoEncriptado").value.toLowerCase();
        if (!validarTexto(texto)) return;
        var textoEncriptado = texto.replace(/e/img, "enter");
        textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
        document.getElementById("textoDesencriptado").value = textoEncriptado;
    }
    function desencriptar() {
        var texto = document.getElementById("textoEncriptado").value.toLowerCase();
        if (!validarTexto(texto)) return;
        var textoEncriptado = texto.replace(/enter/img, "e");
        textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
        document.getElementById("textoDesencriptado").value = textoEncriptado;
    }
    function copiar(){
        textocopiado = document.getElementById("textoDesencriptado")
        textocopiado.select();
        textocopiado.setSelectionRange(0, 999999);
        document.execCommand("copy");
        alert("Texto copiado :^)");
    }


    var btn = document.querySelector("#btnEncriptar");
    btn.onclick = encriptar;
    var btnDes = document.querySelector("#btnDesencriptar");
    btnDes.onclick = desencriptar;
    var btnCop = document.querySelector("#btnCopiar");
    btnCop.onclick = copiar;
});