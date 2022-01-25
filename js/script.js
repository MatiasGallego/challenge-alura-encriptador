var reglasEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
var encriptar = true;
var desencriptar = false;

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    encriptarDesencriptar(encriptar);   
}
);
var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    encriptarDesencriptar(desencriptar);    
});

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click",function(){

    var mensaje = document.querySelector('#msg').value;

    if(navigator.clipboard){
        navigator.clipboard.writeText(mensaje)
    }else{
        mensaje.select();
        document.execCommand("copy");
    }

    document.querySelector("#input-texto").value = "";
    document.querySelector('#msg').value = "";
    alert("Mensaje Copiado");
})

function encriptarDesencriptar(encriptarDesencriptar){
    var patt = /^[a-z\s]+$/g;
    var textoAEncriptar = document.querySelector("#input-texto").value;    
    var errorCarateres = document.querySelector("#mensaje-error");   
    var textMensaje  = document.querySelector("#msg");

    if (patt.test(textoAEncriptar)){
        var textoEncriptado = reglasEncriptarDesencriptar(textoAEncriptar,encriptarDesencriptar);
        textMensaje.value = textoEncriptado;   
        errorCarateres.classList.add("invisible");
    }else{
        if (textoAEncriptar.length == 0){
            errorCarateres.textContent = "Ingrese texto";
        }
        else{
            errorCarateres.textContent = "No ingrese acentos,caracteres especiales ni numeros";
            textMensaje.value = "";
        }
        errorCarateres.classList.remove("invisible");
    }
}

function reglasEncriptarDesencriptar(fraseParaEncriptar,encriptar){

    for(var indice = 0 ; indice<reglasEncriptar.length;indice++){         
            var regla = reglasEncriptar[indice]; 
            if (encriptar){
                fraseParaEncriptar = fraseParaEncriptar.replaceAll(regla[0],regla[1]);      
            }else
                fraseParaEncriptar = fraseParaEncriptar.replaceAll(regla[1],regla[0]);      
    }
    return fraseParaEncriptar;
}
