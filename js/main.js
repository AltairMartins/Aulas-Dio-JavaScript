function clicou(){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
}

//function redirecionar(){
   // window.open("https://google.com/"); outra aba
   // window.location.href = "https://google.com/"; mesma janela

//}

function trocar(elemento){
//document.getElementById("mousemove").innerHTML = "Obrigado po passar o Mouse!";
elemento.innerHTML = "Obrigado po passar o Mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui!";
    elemento.innerHTML = "Passe o Mouse Aqui!";
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/*function soma(n1,n2){
    return n1+n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
    validaIdade(idade)
    console.log(validar);
*/



/*var d = new Date();
console.log("hoje é "+ d.getDate()+ "/"+(d.getMonth()));
*/

//alert(d.getHours());


/*
var count;
for (count= 0; count <= 5; count++){
    console.log(count);
}
*/


/*var count = 0;
    while (count <= 5){
        console.log(count);
        count++;
    }

*/

/*var idade = prompt("qual sua idade?");
   if(idade >= 18){
       alert("maior de idade");
   } else{
       alert("menor de idade")
   }; */


//var nome = "altair";
//var idade = 31;
//var frase = "altair martins "

//var lista= ["maça","pêra","laranja"];

/*var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//console.log(lista.join(" - "));
//console.log(lista.toString);
//console.log(lista.reverse());
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
// alert(nome + " tem " + idade);

//console.log(nome.toUpperCase());
//console.log(nome.toLowerCase());
//console.log(frase + idade);
//console.log(frase.replace("martins", "de lima"));
//alert(frase.replace("altair", "de lima"));