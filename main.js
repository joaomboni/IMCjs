function trocar(elemento){
    elemento.innerHTML = "Índice de Massa Corporal";
}

function voltar(elemento){
    elemento.innerHTML = "<strong>IMC</strong>";
}

//(Organização Mundial de Saúde);

function trocaroms(elemento){
    elemento.innerHTML = "Organização Mundial da Saúde";
}

function voltaroms(elemento){
    elemento.innerHTML = "<strong>OMS</strong>";
}

//Botão para realizar o teste;

function testbutton(){
    window.location.href="ex00.html";
}
function somar(){
    let tn1 = document.querySelector("input#peso");
    let tn2 = document.querySelector("input#altura");
    let res = document.querySelector("div#results");
    let msg = document.querySelector("div#msg");
    let n1 = Number(peso.value);
    let n2 = Number(altura.value);
    let imc = n1 / (n2 * 2);
    console.log(imc);
    res.innerHTML = `RESULTADO DO SEU TESTE.`;
    if(imc < 18.5){
        msg.innerHTML = `Seu IMC é ${imc.toFixed(2)}, Você está ABAIXO DO PESO!!`;
     }else if(imc >= 18.5 && imc <= 24.9){
        msg.innerHTML= `Seu IMC é ${imc.toFixed(2)}, Você está SAUDAVEL!!`;
    }else if(imc >= 25 && imc <= 29.99){
        msg.innerHTML = `Seu IMC é ${imc.toFixed(2)}, Você está com SOBREPESO!!`;
    }else if(imc >= 30 && imc <= 34.99){
        msg.innerHTML = `Seu IMC é ${imc.toFixed(2)}, Você está com OBESIDADE GRAU 1!!`;
    }else if(imc >= 35 && imc <= 39.99){
        msg.innerHTML = `Seu IMC é ${imc.toFixed(2)},Você está com OBESIDADE GRAU 2 (SEVERA)!!`;
    }else{
        msg.innerHTML = `Seu IMC é ${imc.toFixed(2)},Você está com OBESIDADE GRAU 3 (MORBIDA)!!`
    }

}

