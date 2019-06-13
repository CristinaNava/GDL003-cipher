/*const showName = document.getElementById("codificar");
const showName2 = document.getElementById("decodificar");
const showName3= document.getElementById("inicio");

console.log(showName);
*/

let texto = document.getElementById("mensajeCifrar");

let cifrar = () => {
    let textoValor = texto.value;
    let offset= document.getElementById("offset").value;
    document.getElementById("mensajeCifrado").innerHTML= window.cipher.encode(offset, textoValor);

    //console.log ();

}
document.getElementById("codificar").addEventListener("click", cifrar);



let decifrar = () => {
    let textoValor = texto.value;
    let offset= document.getElementById("offset").value;
    document.getElementById("mensajeCifrado").innerHTML= window.cipher.decode(offset, textoValor);
}
document.getElementById("decodificar").addEventListener("click", decifrar);

/*

showName.addEventListener("click", () =>{
displayName.innerHTML= window.cipher.encode();
});

showName2.addEventListener("click" , () =>{
displayName.innerHTML= window.cipher.decode();
});

showName3.addEventListener("click" , () =>{
displayName.innerHTML= window.cipher.decode();
});


document.getElementById("texto_codificado").innerHTML = document.getElementById("codificar").value;



document.getElementById("boton_codificar").addEventListener("click", href= "decode.html");

document.getElementById("boton_inicio").addEventListener("click", href= "index.html");*/
