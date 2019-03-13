var nomeBootInputText = window.document.getElementById("nomeBoot")
var periodoSelect = window.document.getElementById("periodoContatoBoot")


function selecaoCampo(){
    console.log ("Recuperando valor com o Value: ", + nomeBootInputText.value)
    //Chamar nomeBootInputText.value no Console    
}

function selecaoCampoPeriodo(){
    console.log ("Recuperando valor com o Value: ", + periodoSelect.value)
}

var emailPromocional = document.querySelector("#emailPromocionalBoot");
    function selecionarEmailPromocional(){
    console.log("Object call Tipo: ", Object.prototype.toString.call(emailPromocionalBoot))
    console.log("tagName: " + emailPromocional.tagName)
    console.log("Tagname type: " + emailPromocional.type)
    console.log("Valor Value: " + emailPromocional.value)
    console.log("Valor Value: " + emailPromocional.checked)
}

var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]")

function selecionarCampoRadio(){
    console.log("Object call Tipo: ", Object.prototype.toString.call(formaContatoRadio))
    console.log("tagName: " + formaContatoRadio.tagName)
    console.log("Tagname type: " + formaContatoRadio.type)
    console.log("Valor Value: " + formaContatoRadio.value)
    console.log("Valor Value: " + formaContatoRadio.checked)
}

var radios = document.getElementsByName("formaContatoRadioBoot");

function selecionarCamposRadios(){
console.log("Object call Tipo: ", Object.prototype.toString.call(radios))
}