const inputs = document.querySelectorAll(`.validar`), 
      $modal = document.getElementById("modal"),
      incorrectos = [];

const validarCampo = (campo) =>{
    let expReg = new RegExp(campo.pattern);
    if(!(expReg.test(campo.value))) incorrectos.push(campo.title);
}

document.addEventListener("submit", e=>{
    e.preventDefault();
    inputs.forEach(input => {
        validarCampo(input);
    });
    if(incorrectos.length === 0){
        $modal.style.visibility = "visible";
        $modal.querySelector("p").textContent = "The data has been sended successfully";
    }
    else{
        let string = "Please, check the next fields: "
        incorrectos.forEach(el => string += `<br>${el}`);
        $modal.querySelector("p").innerHTML = string;
        $modal.style.visibility = "visible";
    }
});

document.addEventListener("change", e=>{
    if(e.target.matches(`select`)){
        e.target.style="border-bottom: 1px solid green";
    }
    if(e.target.matches( `textarea`)){
        e.target.style = "border-bottom: 1px solid green";
    }
    if(e.target === inputs[2]){
        if (inputs[2].value >14 && inputs[2].value <= 99 ) return inputs[2].style = "border-bottom: 1px solid green"
        else {
            inputs[2].style = "border-bottom: 1px solid #f00";
            $modal.style.visibility = "visible";
            $modal.querySelector("p").textContent = "Please, the age must be valid. (14-99)";
            incorrectos.push(e.target.title)
        }

    }
});

document.addEventListener("click", e=>{
    if(e.target.matches("#modal-btn") || e.target.matches("#modal")){
        $modal.style.visibility = "hidden";
    }
})