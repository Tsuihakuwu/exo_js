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


var ex8_1_table_output = ['Index','Prénom'];

//var ex8_1_table_output = ['Index','Prénom',"1","Matthias","2","Matthias","3","Matthias","4","Matthias","5","Matthias","6","Matthias","7","Matthias","8","Matthias","9","Matthias","10","Matthias",];

function ex8_1(index_8_1) {
    
    //var prenom = document.getElementById("ex8_1_prn").value;
    //var i = document.getElementById("ex8_1_idx").innerHTML;

    if(i==undefined){
        var i =1;
    }


    switch(index_8_1) {
        case(0):
            let prt = true;
            while(prt){
                s = window.prompt("Entrez le prénom n°"+i);
                ex8_1_table_output.push(i,s);
                i++;
                //alert(typeof s);
                if(typeof s != typeof " "){
                    //alert("prt=false");
                    prt=false;
                }
            }
            break;
        case(1):
            var arrayLength = ex8_1_table_output.length;
            arrayLength = arrayLength-2;
            var theTable = document.createElement('table');
            for (var i = 0, tr, td; i < arrayLength; i++) {
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
            theTable.setAttribute("border", "2");
            theTable.setAttribute("width", "249px");
            theTable.setAttribute("margin-top", "20px");
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
        case(2):
            document.getElementById("ex8_1_op").innerHTML = " ";
            ex8_1_table_output = ['Index','Prénom'];
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
        output8_2 += document.getElementById("ex8_2_op").innerHTML + nbr-1 + ", ";
    }
    document.getElementById("ex8_2_op").innerHTML = output8_2.slice(0,-2);
}

///////////////////////////// Exercice 3 JS08 /////////////////////////////

// Exercice 3 - Moyenne

// Ecrire un programme qui demande à l'utilisateur de saisir des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).

var ex8_3_output = ['10,20,30'];

//var ex8_1_table_output = ['Index','Prénom',"1","Matthias","2","Matthias","3","Matthias","4","Matthias","5","Matthias","6","Matthias","7","Matthias","8","Matthias","9","Matthias","10","Matthias",];

function ex8_3(index_8_3) {
    
    //var prenom = document.getElementById("ex8_1_prn").value;
    //var i = document.getElementById("ex8_1_idx").innerHTML;

    if(i==undefined){
        var i =1;
    }


    switch(index_8_3) {
        case(0):
            let prt = true;
            while(prt){
                let s = window.prompt("Entrez le nombre n°"+i +" (Entrez 0 pour quitter)");
                ex8_3_output.push(s);
                i++;
                //alert(typeof s);
                if(s == "0"){
                    prt=false;
                }
            }
            break;
        case(1):
            var add = 0;
            var total = 0;
            for (var i = 0; i < ex8_3_output.length; i++) {
                add = add + ex8_3_output[i];
                total = total + parseInt(add);
                console.log(add);
                console.log(total);
                //console.log(ex8_3_output[i]);
            }
            add
            document.getElementById("ex8_3_op").innerHTML = "L'addition des nombres est égal à : " + total;
            break;
        case(2):
            
            break;
    }
}