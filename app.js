let input = "";

//Paramétrage: reset et rem --> OK
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
// Cahier des charges:

//1- Le service calculette doit afficher au démarrage un publicité

//2- Après 5 sec d'affichage de la publicité, le service calculette est disponible

//3- opération --> à faire: liste soit librairie des opérateurs soit fonction recherche aléatoirement dans liste d'opérateurs

var d = document.getElementById('operation');
d.innerHTML = "";
d.innerHTML = nb_aleatoire1() + "x" + nb_aleatoire2();

//Mémo/amélioration: ces 2 fonctions peuvent fusionner: à tester
function nb_aleatoire1() {
    return Math.floor(Math.random() * 10) + 1;
}

function nb_aleatoire2() {
  return Math.floor(Math.random() * 10) + 1;
}

//4- L'élève propose un résultat: saisie, calcul et stockage du résultat

//4-1 permet de saisir dans résultat: ok
    function ShowValue(btn){  
    input += btn.value;
    
//4-2 ce résultat bon ou mauvais reste affiché 5 sec: à faire -> durée du service 5sec
      console.log(input);
      document.getElementById("output").innerHTML = input;
    }

//4-3 Fait le calcul : ok
function quickMath(){
  console.log(eval(input));
       document.getElementById("output").innerHTML = eval(input);
}

//4-4 stocke le résultat dans la variable 'résultat': à faire


//5- Comparaison : la variable 'résultat' et la variable 'résultat de l'opération' sont comparées. Si == alors affichage figurine réussit, sinon affichage figurine d'encouragement

//5-1 Le résultat reste affiché 5 sec

//5-2 Fermeture du service

// Le service peut être relancé mais manuellement


