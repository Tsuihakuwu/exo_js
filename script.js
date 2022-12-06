///////////////////////////// Exercice 1 JS05 /////////////////////////////

function ex5_1() {
    var reponse1 = document.getElementById("ex5_1_prenom").value;
    var reponse2 = document.getElementById("ex5_1_nom").value;
    var reponse3 = " ";
    var radios = document.getElementsByName('sexe');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var reponse3 = radios[i].value;
        }
        if (reponse3 == "feminin") {
            reponse3 = "Madame";
        }
        else if (reponse3 == "masculin") {
            reponse3 = "Monsieur";
        }
    }
    document.getElementById("rt5_1").innerHTML = "<br>Bonjour " + reponse3 + " " + reponse1 + " " + reponse2 + "<br> Bienvenue sur la page de test Javascript !";
}
///////////////////////////// Exercice 2 JS06 /////////////////////////////

function stringToBoolean(val) {
    var a = {
        'true': true,
        'false': false
    };
    return a[val];
}

function ex5_2(index_5_2) {
    var a = "100";
    var b = parseInt(document.getElementById("ex5_2_entier").innerHTML);
    //alert(typeof b + b);
    var c = 1.00;
    // console.log(c);
    var d = stringToBoolean(document.getElementById("ex5_2_bool").innerHTML);
    //alert(d);

    switch (index_5_2) {
        case (1):
            alert("Ceci une chaîne de caractères : " + a);
            break;
        case (2):
            alert("La valeur de b est égale à : " + b);
            break;
        case (3):
            b--;
            document.getElementById("ex5_2_entier").innerHTML = b;
            break;
        case (4):
            b = b - 10;
            document.getElementById("ex5_2_entier").innerHTML = b;
            break;
        case (5):
            b++;
            document.getElementById("ex5_2_entier").innerHTML = b;
            break;
        case (6):
            b = b + 10;
            document.getElementById("ex5_2_entier").innerHTML = b;
            break;
        case (7):
            alert("La valeur de c est égale à : " + c);
            break;
        case (8):
            alert("La valeur de d est égale à : " + d);
            break;
        case (9):
            d = !d;
            //alert(d);
            document.getElementById("ex5_2_bool").innerHTML = d;
            break;
        case (0):
            document.getElementById("ex5_2_add").innerHTML = '"' + a + b + '"';
            break;
        default:
            break;
    }



    // console.log(b);
    // b--;
    // console.log(b);
    // c += a;
    // console.log(c);
    // d = !d;
    // //console.log(d);

}

///////////////////////////// Exercice 1 JS07 /////////////////////////////

// Exercice 1 - Parité

// Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. Le programme doit afficher le résultat nombre pair ou nombre impair. Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.

// var nbr = window.prompt("Entrez un chiffre ou un nombre : ");

function ex7_1() {
    //alert(typeof document.getElementById("ex7_1_nbr").value);
    nbr = parseInt(document.getElementById("ex7_1_nbr").value);
    if (nbr % 2 == 0) {
        document.getElementById("ex7_1_op").innerHTML = "Le nombre est pair !";
        //alert("Pair");
    }
    else {
        document.getElementById("ex7_1_op").innerHTML = "Le nombre est impair !";
        //alert("Impair");
    }
}

///////////////////////////// Exercice 2 JS07 /////////////////////////////

// Exercice 2 - Age

// Ecrivez un programme qui demande l'année de naissance à l'utilisateur. En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.

function ex7_2() {
    var ddn = document.getElementById("ex7_2_ddn").value;
    //console.log(document.getElementById("ex7_2_ddn").value);
    var current_year = new Date().getFullYear();
    ddn = parseInt(ddn);

    // console.log(typeof current_year + " " + current_year);
    // console.log(typeof ddn + " " + ddn);

    if (ddn == current_year) {
        document.getElementById("ex7_2_op").innerHTML = "Félicitation vous venez tout juste de naitre !";
        //alert("Félicitation vous venez tout juste de naitre !");
    }
    else if (ddn > current_year) {
        document.getElementById("ex7_2_op").innerHTML = "L'utilisateur n'est pas encore né !";
        //alert("L'utilisateur n'est pas encore né !");
    }
    else if (ddn < current_year) {
        var age = current_year - ddn;
        if (age >= 119) {
            document.getElementById("ex7_2_op").innerHTML = "L'utilisateur a " + age + " an(s) et est probablement mort ଘ(੭ˊᵕˋ)੭";
        }
        else {
            document.getElementById("ex7_2_op").innerHTML = "L'utilisateur a " + age + " an(s)";
        }
        //alert("L'utilisateur a " + age + " an(s)");    
    }
    else {
        document.getElementById("ex7_2_op").innerHTML = "Erreur";
        //alert("Erreur");
    }
}

// var ddn = window.prompt("Entrez année de naissance : ");
// var current_year = new Date().getFullYear();
// ddn = parseInt(ddn);

// console.log(typeof current_year + " " + current_year);
// console.log(typeof ddn + " " + ddn);

// if (ddn == current_year ) {
//     alert("Félicitation vous venez tout juste de naitre !");
// }
// else if (ddn > current_year) {
//     alert("L'utilisateur n'est pas encore né !");
// }
// else if (ddn < current_year) {
//     var age = current_year - ddn;
//     alert("L'utilisateur a " + age + " an(s)" );    
// }
// else {
//     alert("Erreur");
// }

///////////////////////////// Exercice 3 JS07 /////////////////////////////

// Exercice 3 - Calculette

// Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.

// Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.

// Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.

function ex7_3() {

    var nbr1 = parseInt(document.getElementById("ex7_3_nb1").value);
    var nbr2 = parseInt(document.getElementById("ex7_3_nb2").value);
    var op = document.getElementById("ex7_3_ope");
    var value_op = op.value;
    // var text_op = op.options[op.selectedIndex].text;
    // alert(value_op + " " + text_op);
    var rs = 0;

    switch (value_op) {
        case ("+"):
            rs = nbr1 + nbr2;
            document.getElementById("ex7_3_op").innerHTML = "Résultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        case ("-"):
            rs = nbr1 - nbr2;
            document.getElementById("ex7_3_op").innerHTML = "Résultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        case ("*"):
            rs = nbr1 * nbr2;
            document.getElementById("ex7_3_op").innerHTML = "Résultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        case ("/"):
            if (nbr2 == 0) {
                document.getElementById("ex7_3_op").innerHTML = "Division par 0 impossible";
                //alert("Division par 0 impossible");
                break;
            }
            else
                rs = nbr1 / nbr2;
            document.getElementById("ex7_3_op").innerHTML = "Résultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        default:
            document.getElementById("ex7_3_op").innerHTML = "Erreur - Opérateur errroné";
        //alert("Erreur - Opérateur errroné");
    }
}

// var nbr1 = window.prompt("Entrez un premier nombre : ");
// var nbr2 = window.prompt("Entrez un deuxième nombre : ");
// nbr1 = parseInt(nbr1);
// nbr2 = parseInt(nbr2);
// var op = window.prompt("Entrez un opérateur (+, -, * ou /) : ");
// var rs = 0;

// switch(op){
//     case("+"):
//         rs = nbr1+nbr2;
//         alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
//         break;
//     case("-"):
//         rs = nbr1-nbr2;
//         alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
//         break;
//     case("*"):
//         rs = nbr1*nbr2;
//         alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
//         break;
//     case("/"):
//         if(nbr2==0){
//             alert("Division par 0 impossible");
//             break;
//         }
//         else
//         rs = nbr1/nbr2;
//         alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
//         break;
//     default:
//         alert("Erreur - Opérateur errroné");
// }

///////////////////////////// Exercice 1 JS08 /////////////////////////////

// Exercice 1 - Saisie

//     Créer une page HTML qui demande à l'utilisateur un prénom.
//     La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
//     Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.


var ex8_1_table_output = ['Index', 'Prénom'];

//var ex8_1_table_output = ['Index','Prénom',"1","Matthias","2","Matthias","3","Matthias","4","Matthias","5","Matthias","6","Matthias","7","Matthias","8","Matthias","9","Matthias","10","Matthias",];

function ex8_1(index_8_1) {

    //var prenom = document.getElementById("ex8_1_prn").value;
    //var i = document.getElementById("ex8_1_idx").innerHTML;

    if (i == undefined) {
        var i = 1;
    }


    switch (index_8_1) {
        case (0):
            let prt = true;
            while (prt) {
                s = window.prompt("Entrez le prénom n°" + i);
                ex8_1_table_output.push(i, s);
                i++;
                //alert(typeof s);
                if (typeof s != typeof " ") {
                    //alert("prt=false");
                    prt = false;
                }
            }
            break;
        case (1):
            document.getElementById("ex8_1_op").innerHTML = "";
            var arrayLength = ex8_1_table_output.length;
            arrayLength = arrayLength - 2;
            var theTable = document.createElement('table');
            for (var i = 0, tr, td1, td2; i < arrayLength; i++) {
                tr = document.createElement('tr');
                td1 = document.createElement('td');
                td2 = document.createElement('td');
                td1.appendChild(document.createTextNode(ex8_1_table_output[i]));
                i++;
                td2.appendChild(document.createTextNode(ex8_1_table_output[i]));
                tr.appendChild(td1);
                tr.appendChild(td2);
                theTable.appendChild(tr);
            }
            document.getElementById("ex8_1_op").appendChild(theTable);
            setAttributes(theTable, { "border": "2", "width": "249px" });
            // theTable.setAttribute("border", "2");
            // theTable.setAttribute("width", "249px");
            // theTable.setAttribute("margin-top", "20px");
            break;
        // if(i==1){
        //     // document.getElementById("ex8_1_op").innerHTML = "<th><td>Index</td><td>Prénom</td></th><tr><td>"+i+"</td><td>"+prenom+"</td></tr>";
        //     // i++;
        // }
        // else if(i>=2){
        // document.getElementById("ex8_1_op").innerHTML = document.getElementById("ex8_1_op").innerHTML + "<tr><td>"+i+"</td><td>"+prenom+"</td></tr>";
        //         // i++;
        //     }
        //     break;
        // case(1):

        //     break;
        case (2):
            document.getElementById("ex8_1_op").innerHTML = " ";
            ex8_1_table_output = ['Index', 'Prénom'];
            break;
    }
}

//for(i=1,)


// var prt = true;
// var i = 1;

// while(prt){
//     var s = "prenom"+i;
//     //alert(s);
//     s = window.prompt("Entrez le prénom n°"+i);
//     i++;
//     //alert(typeof s);
//     if(typeof s != typeof " "){
//         //alert("prt=false");
//         prt=false;
//     }
// }

// for(i=1,)

///////////////////////////// Exercice 2 JS08 /////////////////////////////

// Exercice 2 - Entiers inférieurs à N

// Ecrire un programme qui affiche les nombres inférieurs à N.

function ex8_2() {
    let nbr = parseInt(document.getElementById("ex8_2_nb").value);
    //alert(nbr);
    document.getElementById("ex8_2_op").innerHTML = "";
    let output8_2 = nbr + ", ";
    for (var i = 0; nbr > i; nbr--) {
        output8_2 += document.getElementById("ex8_2_op").innerHTML + nbr - 1 + ", ";
    }
    document.getElementById("ex8_2_op").innerHTML = output8_2.slice(0, -2);
}

///////////////////////////// Exercice 3 JS08 /////////////////////////////

// Exercice 3 - Moyenne

// Ecrire un programme qui demande à l'utilisateur de saisir des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).

var ex8_3_output = [];

function ex8_3(index_8_3) {

    //var prenom = document.getElementById("ex8_1_prn").value;
    //var i = document.getElementById("ex8_1_idx").innerHTML;

    if (i == undefined) {
        var i = 1;
    }


    switch (index_8_3) {
        case (0):
            let prt = true;
            while (prt) {
                let s = window.prompt("Entrez le nombre n°" + i + " (Entrez 0 pour quitter)");
                ex8_3_output.push(s);
                i++;
                //alert(typeof s);
                if (s == "0") {
                    prt = false;
                }
            }
            break;
        case (1):
            var add = 0;
            //console.log("Taille du tableau : " + ex8_3_output.length);
            for (var i = 0; i < ex8_3_output.length; i++) {
                if (ex8_3_output[i] == '0') {
                    break;
                }
                else {
                    parseInt(add);
                    var add2 = ex8_3_output[i];
                    add2 = parseInt(add2);
                    add = add + add2;
                }
            }
            document.getElementById("ex8_3_op").innerHTML = "L'addition des nombres est égal à : " + add;
            break;
        case (2):
            var add = 0;
            //console.log("Taille du tableau : " + ex8_3_output.length);
            for (var i = 0; i < ex8_3_output.length; i++) {
                if (ex8_3_output[i] == '0') {
                    break;
                }
                else {
                    parseInt(add);
                    var add2 = ex8_3_output[i];
                    add2 = parseInt(add2);
                    add = add + add2;
                }
            }
            moy = add / (ex8_3_output.length - 1);
            document.getElementById("ex8_3_op").innerHTML = "La moyenne des nombres est égale à : " + moy;
            break;
    }
}


///////////////////////////// Exercice 4 JS08 /////////////////////////////

//Exercice 4 - Multiples

// Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

// Exemple pour N=5 et X=7 :

// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21
// 4 x 7 = 28
// 5 x 7 = 35

// Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.

function ex8_4() {
    var n = document.getElementById("ex8_4_nb1").value;
    var y = document.getElementById("ex8_4_nb2").value;

    for (var i = 0; i - 1 < n; i++) {
        let res = i * y;
        document.getElementById("ex8_4_op").innerHTML = document.getElementById("ex8_4_op").innerHTML + "<br/>" + i + " " + " x " + " " + y + " = " + res;
    }
}

///////////////////////////// Exercice 5 JS08 /////////////////////////////

// Exercice 5 - Nombre de voyelles.

// Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

//     myVar.length : retourne le nombre de lettres de la chaîne myVar.
//     myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
//     myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).

function ex8_5() {
    var mot = document.getElementById("ex8_5_mot").value;
    var voy = 0;
    document.getElementById("ex8_5_op").innerHTML = "Le nombre de lettres dans la chaine est de : " + mot.length;
    for (i = 0; i < mot.length; i++) {
        if (mot.substring(i, i + 1).match(/[aeiouy]/ig)) {
            voy++;
            if (voy == 1) {
                index = i + 1;
                document.getElementById("ex8_5_op").innerHTML = document.getElementById("ex8_5_op").innerHTML + "<br/> La première occurence d'une voyelle apparait en " + index + "em position.";
            }
        }
    }
    document.getElementById("ex8_5_op").innerHTML = document.getElementById("ex8_5_op").innerHTML + "<br/> La chaine de caractères contient " + voy + " voyelles.";
}

///////////////////////////// Exercice 1 JS09 /////////////////////////////

// Exercice 1

// Créer les 2 fonctions suivantes :

//     produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
//     afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image correspond au chemin de votre image )

// Créer la page HTML correspondant au résultat ci-dessous :

// img_function_pap.JPG

// Vous aurez besoin de cette image

function ex9_1(idx) {
    switch (idx) {
        case (0):
            nb1 = document.getElementById('ex9_1_nb1').value;
            nb2 = document.getElementById('ex9_1_nb2').value;
            var prod = nb1 * nb2;
            document.getElementById('ex9_1_op').innerHTML = "Le produit des deux nombres est égal à : " + prod;
            break;
        case (1):
            document.getElementById('ex9_1_op').innerHTML = "";
            var img_pap = document.createElement("img");
            document.getElementById('ex9_1_op').appendChild(img_pap);
            document.getElementById('ex9_1_op').lastChild.setAttribute('src', 'papillon.jpg');
            break;
        case (2):
            document.getElementById('ex9_1_op').innerHTML = "";
            break;
    }
}

///////////////////////////// Exercice 2 JS09 /////////////////////////////

// Exercice 2 - String Token

// Concevez la fonction strtok() qui prend 3 paramètres str1, str2, n en entrée et renvoie une chaîne de caractères : str1 est composée d'une liste de mots séparés par le caractère str2. strtok() sert à extraire le nième mot de str1.

// Exemple :

// Pour str1 = « robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner amiens.

// Indice : utilisez la méthode split().

function ex9_2() {

    function strtok(str1, str2, n) {
        var index = str1.split(str2);
        return index[n - 1];
    }
    var str1 = document.getElementById("ex9_2_str1").value;
    var str2 = document.getElementById("ex9_2_str2").value;
    var tok = document.getElementById("ex9_2_tok").value;
    // alert("debug1 :" + str1);
    var index_retour = strtok(str1, str2, tok);
    // alert("debug4 :" + index_retour);

    document.getElementById("ex9_2_op").innerHTML = "La valeur à l'index " + tok + " est égale à : " + index_retour;
}

///////////////////////////// Exercice 1 JS10 /////////////////////////////

// Exercice 1

// Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.

// Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.

// Puis votre programme doit afficher le contenu du tableau.

const my_array10_1 = [];

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function ex10_1_a() {
    document.getElementById("ex10_1_op").innerHTML = "";
    for (var i = 1; i < parseInt(document.getElementById("ex10_1_tab").value) + 1; i++) {
        input = document.createElement('input');
        input_validate = document.createElement('input');
        label = document.createElement('label');
        setAttributes(label, { 'class': 'ex10_1_sb2' });
        br = document.createElement('br');
        document.getElementById("ex10_1_op").appendChild(label);
        label.innerHTML = "Entrée n°" + i + " : ";
        document.getElementById("ex10_1_op").appendChild(input);
        document.getElementById("ex10_1_op").appendChild(br);
        setAttributes(input, { 'class': 'ex10_1_sb2', 'type': 'text', 'value': Math.floor(Math.random(100) * 100), 'id': 'ex10_1_input' + i });
        // input.setAttribute('class','ex10_1_i');
        // input.setAttribute('type','text');
        // input.setAttribute('placeholder','Valeur');
        // input.setAttribute('id','ex10_1_input'+i);
    }
    document.getElementById("ex10_1_op").appendChild(input_validate);
    setAttributes(input_validate, { 'class': 'ex10_1_sb2', 'type': 'button', 'value': 'Afficher tableau', 'id': 'ex10_1_sb2', 'onclick': 'ex10_1_b()' });
    // input_validate.setAttribute('class','ex10_1_i');
    // input_validate.setAttribute('type','button');
    // input_validate.setAttribute('value','Recherche');
    // input_validate.setAttribute('id','ex10_1_sb');
    // input_validate.setAttribute('onclick','ex10_1_b()');

    display_switch("ex10_1_sb1", "ex10_1_sb2");


}

function ex10_1_b() {
    //stockage dans tableau pour respecter l'exercice
    for (var i = 1; i < parseInt(document.getElementById("ex10_1_tab").value) + 1; i++) {
        my_array10_1[i] = document.getElementById("ex10_1_input" + i).value;
    }

    //mise en forme
    document.getElementById("ex10_1_tb_op").innerHTML = " ";
    var arrayLength10_1 = my_array10_1.length;
    var table10_1 = document.createElement('table');
    for (var i = 1, tr, td1, td2; i < arrayLength10_1; i++) {
        //alert("i :" + i);
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(i));
        td2.appendChild(document.createTextNode(my_array10_1[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        table10_1.appendChild(tr);
    }
    document.getElementById("ex10_1_tb_op").appendChild(table10_1);
    setAttributes(table10_1, { "border": "2", "width": "249px" });

    display_switch("ex10_1_sb2", "ex10_1_sb3");

}

///////////////////////////// Exercice 2 JS10 /////////////////////////////

// Exercice 2

// Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir d’un tableau à une dimension :

//     Affichage du contenu de tous les postes du tableau,
//     Affichage du contenu d’un poste dont l’index est saisi au clavier,
//     Affichage du maximum et de la moyenne des postes du tableau

// Ce programme sera structuré de la manière suivante :

//     une fonction GetInteger pour lire un entier au clavier,
//     une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
//     une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
//     une fonction AfficheTab pour afficher tous les postes du tableau,
//     une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
//     une fonction InfoTab qui affichera le maximum et la moyenne des postes.

// Les fonctions seront appelées successivement.

var sai_int = 0;
var my_array10_2 = [];

//Le bouton est caché dans le HTML car aucune utilité pour un retour utilisateur
function getInteger(id_champ) {
    //sai_int = prompt("Saisissez un entier "+ msg +  " : ");
    //alert(sai_int);
    var valeur_champ = document.getElementById(id_champ).value;
    valeur_champ = parseInt(valeur_champ);
    if (valeur_champ > 100) {
        return false;
    }
    else {
        return valeur_champ;
    }
}

function display_switch(item1, item2) {
    for (i = 0; i < document.getElementsByClassName(item1).length; i++) {
        document.getElementsByClassName(item1)[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName(item2).length; i++) {
        document.getElementsByClassName(item2)[i].style.display = "inline";
    }
}

function initTab() {
    //arrayLength = parseInt(getInteger("correspondant à la taille maximale du tableau"));
    var arrayLength = getInteger("ex10_2_taille_tab");
    if (arrayLength == false) {
        alert("Abuse pas gamin :(");
    }
    else {
        //alert("debug1"+arrayLength);
        my_array10_2 = new Array(arrayLength);
        //alert("La taille du tableau a été définie sur : "+my_array10_2.length);
        display_switch("ex10_2_sb2", "ex10_2_sb3");
    }
}

function saisieTab() {
    let idx = 0;
    //alert(my_array10_2.length);
    for (let i = 0; i < my_array10_2.length; i++) {
        idx = i + 1;
        //my_array10_2[i] = prompt("Saisissez l'entrée n°"+ idx +" : ");
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        document.getElementById("ex10_2_output_saisie").appendChild(label);
        label.innerHTML = "Entrée n°" + idx + " : ";
        document.getElementById("ex10_2_output_saisie").appendChild(input);
        document.getElementById("ex10_2_output_saisie").appendChild(br);
        setAttributes(input, { 'class': 'ex10_2_i', 'type': 'text', 'value': Math.floor(Math.random(100) * 100), 'id': 'ex10_2_input' + i });
    }
    display_switch("ex10_2_sb3", "ex10_2_sb4");
}

function afficheTab() {
    //alert(my_array10_2.length+1);
    for (var i = 0; i < my_array10_2.length; i++) {
        //alert(parseInt(document.getElementById("ex10_2_input1").value), typeof document.getElementById("ex10_2_input1"));
        my_array10_2[i] = parseInt(document.getElementById("ex10_2_input" + i).value);
        //alert("Index : "+i+ "Champ : "+my_array10_2[i]);
    }
    var arrayLength10_2 = my_array10_2.length;
    var table10_2 = document.createElement('table');
    for (var i = 0, tr, td1, td2; i < arrayLength10_2; i++) {
        //alert("i :" + i);
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(i + 1));
        td2.appendChild(document.createTextNode(my_array10_2[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        table10_2.appendChild(tr);
        setAttributes(tr, { "id": "tr" + i });
    }
    br = document.createElement('br');
    document.getElementById("ex10_2_op").appendChild(table10_2);
    document.getElementById("ex10_2_op").appendChild(br);
    setAttributes(table10_2, { "border": "2", "width": "249px" });
    display_switch("ex10_2_sb4", "ex10_2_sb5");
}

function rechercheTab() {
    //  idx = parseInt(getInteger("correspondant à l'index de la ligne à surligner"));
    document.getElementById('ex10_2_info').innerHTML = " ";
    idx = parseInt(document.getElementById('ex10_2_recherche').value);
    //alert(my_array10_2[idx-1]);
    if (idx > my_array10_2.length) {
        alert('Index hors du tableau !');
    }
    else {
        idx = idx - 1;
        for (i = 0; i < my_array10_2.length; i++) {
            document.getElementById('tr' + i).setAttribute("style", "background-color:white");
        }
        document.getElementById('tr' + idx).setAttribute("style", "background-color:blue;color:white");
    }
}

function infoTab() {
    var moy_tab = 0;
    var total_tab = 0;
    var max_tab = 0;
    var idx_max = 0;
    for (i = 0; i < my_array10_2.length; i++) {
        total_tab += parseInt(my_array10_2[i]);
        if (my_array10_2[i] > max_tab) {
            idx_max = i;
            max_tab = parseInt(my_array10_2[i]);
        }
    }
    moy_tab = total_tab / my_array10_2.length;

    for (i = 0; i < my_array10_2.length; i++) {
        document.getElementById('tr' + i).setAttribute("style", "background-color:white");
    }
    document.getElementById('tr' + idx_max).setAttribute("style", "background-color:red;color:white");
    idx_max++;
    document.getElementById('ex10_2_info').innerHTML = "La somme de tout le tableau est égal à : " + total_tab + "<br>La moyenne des entrées est de : "
        + moy_tab + "<br>Le maximum est de " + max_tab + " et est contenu dans la ligne " + idx_max + " surlignée en rouge."
    // alert("moyenne=" + moy_tab);
    // alert('maximum=' + max_tab);
}

///////////////////////////// Exercice 3 JS10 /////////////////////////////

// Exercice 3 : Tri d’un tableau

// Ecrire le programme qui réalise le tri à bulles.

var my_array10_3 = [];

function initTab10_3() {

    //alert(parseInt(document.getElementById('ex10_3_taille_tab').value));
    my_array10_3 = new Array(parseInt(document.getElementById('ex10_3_taille_tab').value));


    let idx = 0;
    //alert(my_array10_2.length);
    for (let i = 0; i < my_array10_3.length; i++) {
        idx = i + 1;
        //my_array10_2[i] = prompt("Saisissez l'entrée n°"+ idx +" : ");
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        document.getElementById("ex10_3_output_saisie").appendChild(label);
        label.innerHTML = "Entrée n°" + idx + " : ";
        document.getElementById("ex10_3_output_saisie").appendChild(input);
        document.getElementById("ex10_3_output_saisie").appendChild(br);
        setAttributes(input, { 'class': 'ex10_3_i', 'type': 'text', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'ex10_3_input' + i });
    }
    display_switch("ex10_3_sb1", "ex10_3_sb2");
}

function triTab10_3() {
    //Aquisition des valeurs dans les champs
    for (var i = 0; i < my_array10_3.length; i++) {
        my_array10_3[i] = parseInt(document.getElementById("ex10_3_input" + i).value);
    }

    //Tri à bulles
    var tmp = 0;
    for (i = my_array10_3.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (my_array10_3[j + 1] < my_array10_3[j]) {
                tmp = my_array10_3[j + 1];
                my_array10_3[j + 1] = my_array10_3[j];
                my_array10_3[j] = tmp;
            }
        }
    }

    //Affichage sous forme de tableau du resultat trié
    var arrayLength10_3 = my_array10_3.length;
    var table10_3 = document.createElement('table');
    for (var i = 0, tr, td1, td2; i < arrayLength10_3; i++) {
        //alert("i :" + i);
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(i + 1));
        td2.appendChild(document.createTextNode(my_array10_3[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        table10_3.appendChild(tr);
        setAttributes(tr, { "id": "tr" + i });
    }
    br = document.createElement('br');
    document.getElementById("ex10_3_output_final").appendChild(table10_3);
    document.getElementById("ex10_3_output_final").appendChild(br);
    setAttributes(table10_3, { "border": "2", "width": "249px" });
    display_switch("ex10_3_sb2", "ex10_3_sb3");
}

function restart10_3() {
    document.getElementById("ex10_3_output_final").innerHTML = "";
    document.getElementById("ex10_3_output_saisie").innerHTML = "";
    display_switch('ex10_3_sb3', 'ex10_3_sb1');
}

///////////////////////////// Exercice 1 JS13 /////////////////////////////

// Exercice

// Ecrivez un programme permettant de saisir différentes valeurs numérique (avec l'instruction window.prompt), ces valeurs seront rangées dans un tableau.

// La saisie s'arrête quand l'utilisateur entre la valeur 0.

// A la fin de la saisie, votre programme doit afficher le nombre de valeurs saisies, la somme et la moyenne.

var my_array13_1 = [];
var dynidx = 0;

function sb_entry13_1() {
    if (parseInt(document.getElementById("ex13_1_first").value) == 0) {
        document.getElementById('ex13_1_output_saisie').innerHTML = "Entrez au moins une valeur differente de 0.";
    }
    else if (parseInt(document.getElementById("ex13_1_first").value) != 0) {
        document.getElementById('ex13_1_sb1').setAttribute("style", "display:none;");
        add_input13_1();
    }
}

function add_input13_1() {
    if (dynidx == 0) {
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        button = document.createElement('input');
        document.getElementById("ex13_1_output_saisie").appendChild(label);
        var idxtmp = dynidx+2;
        label.innerHTML = "Entrée n°" + idxtmp + " : ";
        document.getElementById("ex13_1_output_saisie").appendChild(input);
        document.getElementById("ex13_1_output_saisie").appendChild(button);
        document.getElementById("ex13_1_output_saisie").appendChild(br);
        setAttributes(button, { 'class': 'ex13_1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'ex13_1_button' + dynidx, 'onclick': 'sb_dynentry_13_1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'ex13_1_i', 'type': 'text', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'ex13_1_input' + dynidx });
        my_array13_1[dynidx] = parseInt(document.getElementById('ex13_1_first').value);
        //alert("DEBUG 2 : J'assigne la valeur : "+parseInt(document.getElementById('ex13_1_first').value)+"à l'indice " +dynidx+"et j'incrémente" );
        dynidx++;
    }
    else if (dynidx > 0) {
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        button = document.createElement('input');
        document.getElementById("ex13_1_output_saisie").appendChild(label);
        var idxtmp = dynidx+2;
        label.innerHTML = "Entrée n°" + idxtmp + " : ";
        document.getElementById("ex13_1_output_saisie").appendChild(input);
        document.getElementById("ex13_1_output_saisie").appendChild(button);
        document.getElementById("ex13_1_output_saisie").appendChild(br);
        setAttributes(button, { 'class': 'ex13_1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'ex13_1_button' + dynidx, 'onclick': 'sb_dynentry_13_1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'ex13_1_i', 'type': 'number', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'ex13_1_input' + dynidx });
        var idxtmp2 = dynidx-1;
        my_array13_1[dynidx] = parseInt(document.getElementById('ex13_1_input' + idxtmp2).value);
        //alert("DEBUG 3 : J'assigne la valeur : "+parseInt(document.getElementById('ex13_1_input' + idxtmp2).value)+"à l'indice " +dynidx+"et j'incrémente" );
        //alert('debug my_array13_1.length = ' + my_array13_1.length);
        for(i=0;i<my_array13_1.length;i++){
            //cacher les submit dont le dynidx inférieur au dernier
            var tmp = dynidx-1;
            document.getElementById('ex13_1_button' + tmp).setAttribute("style","display:none")
        }
        dynidx++;
    }
}

function sb_dynentry_13_1(dynidx) {
    if (parseInt(document.getElementById('ex13_1_input' + dynidx).value) == 0) {
        //Break si entrée = 0
        //alert("egal a 0");
        document.getElementById('ex13_1_output_saisie').innerHTML = "";
        display_switch("ex13_1_sb1","");
        var arrayLength13_1 = my_array13_1.length;
        var table13_1 = document.createElement('table');
        for (var i=0, tr, td1, td2; i < arrayLength13_1; i++) {
            //alert("i :" + i);
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td1.appendChild(document.createTextNode(i + 1));
            alert(my_array13_1[i]);
            td2.appendChild(document.createTextNode(my_array13_1[i]));
            tr.appendChild(td1);
            tr.appendChild(td2);
            table13_1.appendChild(tr);
            setAttributes(tr, { "id": "tr" + i });
        }
        br = document.createElement('br');
        document.getElementById("ex13_1_output_saisie").appendChild(table13_1);
        document.getElementById("ex13_1_output_saisie").appendChild(br);
        setAttributes(table13_1, { "border": "2", "width": "249px" });

    }
    else if (parseInt(document.getElementById('ex13_1_input' + dynidx).value) != 0) {
        //Récuperer la valeur du champ input généré dynamiquement et en recréer un nouveau
        //alert("diff de 0");
        my_array13_1[dynidx+1] = parseInt(document.getElementById('ex13_1_input' + dynidx).value);
        add_input13_1();
    }
}