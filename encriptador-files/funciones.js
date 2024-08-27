const textAreaUser =document.querySelector(".panel__contenedor__texto");
const textAreaResultado =document.querySelector(".panel__resultado__producto");




// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textAreaUser.value)
    textAreaResultado.value = textoEncriptado;
    textAreaUser.value = "";
    textAreaResultado.style.backgroundImage = "none";

}

function encriptar(stringEncriptada){

    let matrizCodigo =[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }  
    
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textAreaUser.value)
    textAreaResultado.value = textoEncriptado;
    textAreaUser.value = "";
    

}

function desencriptar(stringDesencriptada){

    let matrizCodigo =[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] )

        }
    }  
    
    return stringDesencriptada
}

function copiar(){
    const textoParaCopiar = textAreaResultado.value;

    
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        
        
    }).catch(err => {
       
        
    });
}




