let texto = document.getElementById("mensajeCifrar");

let cifrar = () => {
    let textoValor = texto.value;
    let offset= document.getElementById("offset").value;
    document.getElementById("mensajeCifrado").innerHTML= window.cipher.encode(offset, textoValor);

    //console.log ();

};
document.getElementById("codificar").addEventListener("click", cifrar);



let decifrar = () => {
    let textoValor = texto.value;
    let offset= document.getElementById("offset").value;
    document.getElementById("mensajeCifrado").innerHTML= window.cipher.decode(offset, textoValor);
};
document.getElementById("decodificar").addEventListener("click", decifrar);
