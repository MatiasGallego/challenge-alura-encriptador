var reglasEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
var encriptar = true;
var desencriptar = false;
var patt = /^[a-z\s]+$/g;

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

function encriptarDesencriptar(encriptarDesencriptar){
    var textoAEncriptar = document.querySelector("#input-texto").value;    
    var valido = patt.test(textoAEncriptar);
    var errorCarateres = document.querySelector("#mensaje-error");
    if (valido){
        var textoEncriptado = reglasEncriptarDesencriptar(textoAEncriptar,encriptarDesencriptar);
        document.querySelector("#msg").value = textoEncriptado;   
        errorCarateres.classList.add("invisible");
    }else{
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
