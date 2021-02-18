let input = "";
//permet de saisir dans résultat
    function ShowValue(btn){  
    input += btn.value;
    
  
      console.log(input);
      document.getElementById("output").innerHTML = input;
    }
//Fait le calcul et envoie dans résultat
function quickMath(){
  console.log(eval(input));
       document.getElementById("output").innerHTML = eval(input);
}
//Reset
function Reset(btn){
   document.getElementById("output").innerHTML = "0";
  input = "";
}
//rem
function rem1(btn){
input= input.replace(input.slice(-1), "");
    console.log(input);
 document.getElementById("output").innerHTML = input;
}

//opération

var d = document.getElementById('operation');
d.innerHTML = "";
d.innerHTML = nb_aleatoire1() + "x" + nb_aleatoire2();

function nb_aleatoire1() {
    return Math.floor(Math.random() * 10) + 1;
}

function nb_aleatoire2() {
  return Math.floor(Math.random() * 10) + 1;
}

