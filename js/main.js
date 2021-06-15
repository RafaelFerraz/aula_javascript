function clicou(){
    //alert("Obrigado por clicar :)");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallab.org/");
    //window.location.href = "https://globallab.org/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

/*
function soma(n1, n2){
    return n1 + n2;
}


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = (prompt("Qual sua idade? "));
console.log(validaIdade(idade));

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert("Agora são " + d.getHours() + " horas e " + d.getMinutes() + " minutos.");
*/

/*
var count;
for (count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade? ");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
*/

/*var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/


/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.join("; "))
console.log(lista.reverse());
console.log(lista.toString());

var nome = "Rafael Ferraz";
var idade = 32;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.toUpperCase());*/