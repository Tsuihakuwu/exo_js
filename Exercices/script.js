//Event listener
function el(id_ele,f){
    let element = document.getElementById(id_ele);
    element.addEventListener('click',f);
}

//set multiples attributes en une ligne
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

///////////////////////////// Exercice 1 JS05 /////////////////////////////

//Event listener
sub5_1.addEventListener("click", function(){ex5_1()});

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

//Event listener
sub5_2_1.addEventListener("click", function(){ex5_2(1)});
sub5_2_2.addEventListener("click", function(){ex5_2(2)});
sub5_2_3.addEventListener("click", function(){ex5_2(3)});
sub5_2_4.addEventListener("click", function(){ex5_2(4)});
sub5_2_5.addEventListener("click", function(){ex5_2(5)});
sub5_2_6.addEventListener("click", function(){ex5_2(6)});
sub5_2_7.addEventListener("click", function(){ex5_2(7)});
sub5_2_8.addEventListener("click", function(){ex5_2(8)});
sub5_2_9.addEventListener("click", function(){ex5_2(9)});
sub5_2_0.addEventListener("click", function(){ex5_2(0)});

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
            alert("Ceci une cha??ne de caract??res : " + a);
            break;
        case (2):
            alert("La valeur de b est ??gale ?? : " + b);
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
            alert("La valeur de c est ??gale ?? : " + c);
            break;
        case (8):
            alert("La valeur de d est ??gale ?? : " + d);
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

// Exercice 1 - Parit??

// Ecrivez un programme qui demande un nombre ?? l'utilisateur puis qui teste si ce nombre est pair. Le programme doit afficher le r??sultat nombre pair ou nombre impair. Vous devez utiliser l'op??rateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, si ce reste est ??gal ?? z??ro, a est divisible par 2.

// var nbr = window.prompt("Entrez un chiffre ou un nombre : ");

//Event listener
ex7_1_sb.addEventListener("click", function(){ex7_1()});

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

// Ecrivez un programme qui demande l'ann??e de naissance ?? l'utilisateur. En r??ponse votre programme doit afficher l'??ge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.

//Event listener
ex7_2_sb.addEventListener("click", function(){ex7_2()});

function ex7_2() {
    var ddn = document.getElementById("ex7_2_ddn").value;
    //console.log(document.getElementById("ex7_2_ddn").value);
    var current_year = new Date().getFullYear();
    ddn = parseInt(ddn);

    // console.log(typeof current_year + " " + current_year);
    // console.log(typeof ddn + " " + ddn);

    if (ddn == current_year) {
        document.getElementById("ex7_2_op").innerHTML = "F??licitation vous venez tout juste de naitre !";
        //alert("F??licitation vous venez tout juste de naitre !");
    }
    else if (ddn > current_year) {
        document.getElementById("ex7_2_op").innerHTML = "L'utilisateur n'est pas encore n?? !";
        //alert("L'utilisateur n'est pas encore n?? !");
    }
    else if (ddn < current_year) {
        var age = current_year - ddn;
        if (age >= 119) {
            document.getElementById("ex7_2_op").innerHTML = "L'utilisateur a " + age + " an(s) et est probablement mort ???(??????????)???";
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

// var ddn = window.prompt("Entrez ann??e de naissance : ");
// var current_year = new Date().getFullYear();
// ddn = parseInt(ddn);

// console.log(typeof current_year + " " + current_year);
// console.log(typeof ddn + " " + ddn);

// if (ddn == current_year ) {
//     alert("F??licitation vous venez tout juste de naitre !");
// }
// else if (ddn > current_year) {
//     alert("L'utilisateur n'est pas encore n?? !");
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

// Faire la saisie de 2 nombres entiers, puis la saisie d'un op??rateur +, -, * ou /.

// Si l'utilisateur entre un op??rateur erron??, le programme affichera un message d'erreur.

// Dans le cas contraire, le programme effectuera l'op??ration demand??e (en pr??voyant le cas d'erreur division par 0), puis affichera le r??sultat.

//Event listener
ex7_3_sb.addEventListener("click", function(){ex7_3()});

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
            document.getElementById("ex7_3_op").innerHTML = "R??sultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        case ("-"):
            rs = nbr1 - nbr2;
            document.getElementById("ex7_3_op").innerHTML = "R??sultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        case ("*"):
            rs = nbr1 * nbr2;
            document.getElementById("ex7_3_op").innerHTML = "R??sultat : " + rs;
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
            document.getElementById("ex7_3_op").innerHTML = "R??sultat : " + rs;
            //alert(nbr1+"  "+op+" "+nbr2+" = "+rs);
            break;
        default:
            document.getElementById("ex7_3_op").innerHTML = "Erreur - Op??rateur errron??";
        //alert("Erreur - Op??rateur errron??");
    }
}

// var nbr1 = window.prompt("Entrez un premier nombre : ");
// var nbr2 = window.prompt("Entrez un deuxi??me nombre : ");
// nbr1 = parseInt(nbr1);
// nbr2 = parseInt(nbr2);
// var op = window.prompt("Entrez un op??rateur (+, -, * ou /) : ");
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
//         alert("Erreur - Op??rateur errron??");
// }

///////////////////////////// Exercice 1 JS08 /////////////////////////////

// Exercice 1 - Saisie

//     Cr??er une page HTML qui demande ?? l'utilisateur un pr??nom.
//     La page doit continuer ?? demander des pr??noms ?? l'utilisateur jusqu'?? ce qu'il laisse le champ vide.
//     Enfin, la page affiche sur la console le nombre de pr??noms et les pr??noms saisis.

//Event listener
ex8_1_vd.addEventListener("click", function(){ex8_1(0)});
ex8_1_af.addEventListener("click", function(){ex8_1(1)});
ex8_1_sb.addEventListener("click", function(){ex8_1(2)});

var ex8_1_table_output = ['Index', 'Pr??nom'];

//var ex8_1_table_output = ['Index','Pr??nom',"1","Matthias","2","Matthias","3","Matthias","4","Matthias","5","Matthias","6","Matthias","7","Matthias","8","Matthias","9","Matthias","10","Matthias",];

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
                s = window.prompt("Entrez le pr??nom n??" + i);
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
        //     // document.getElementById("ex8_1_op").innerHTML = "<th><td>Index</td><td>Pr??nom</td></th><tr><td>"+i+"</td><td>"+prenom+"</td></tr>";
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
            ex8_1_table_output = ['Index', 'Pr??nom'];
            break;
    }
}

//for(i=1,)


// var prt = true;
// var i = 1;

// while(prt){
//     var s = "prenom"+i;
//     //alert(s);
//     s = window.prompt("Entrez le pr??nom n??"+i);
//     i++;
//     //alert(typeof s);
//     if(typeof s != typeof " "){
//         //alert("prt=false");
//         prt=false;
//     }
// }

// for(i=1,)

///////////////////////////// Exercice 2 JS08 /////////////////////////////

// Exercice 2 - Entiers inf??rieurs ?? N

// Ecrire un programme qui affiche les nombres inf??rieurs ?? N.

//Event listener
ex8_2_sb.addEventListener("click", function(){ex8_2()});

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

// Ecrire un programme qui demande ?? l'utilisateur de saisir des entiers et en affiche la somme et la moyenne (on arr??te la saisie avec la valeur 0).

// //Event listener
ex8_3_vd.addEventListener("click", function(){ex8_3(0)});
ex8_3_ad.addEventListener("click", function(){ex8_3(1)});
ex8_3_mo.addEventListener("click", function(){ex8_3(2)});

var ex8_3_output = [];

function ex8_3(index_8_3) {

    //var prenom = document.getElementById("ex8_1_prn").value;
    //var i = document.getElementById("ex8_1_idx").innerHTML;

    i = 1;


    switch (index_8_3) {
        case (0):
            let prt = true;
            while (prt) {
                let s = window.prompt("Entrez le nombre n??" + i + " (Entrez 0 pour quitter)");
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
            document.getElementById("ex8_3_op").innerHTML = "L'addition des nombres est ??gal ?? : " + add;
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
            document.getElementById("ex8_3_op").innerHTML = "La moyenne des nombres est ??gale ?? : " + moy;
            break;
    }
}


///////////////////////////// Exercice 4 JS08 /////////////////////////////

//Exercice 4 - Multiples

// Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X ??tant entr??s au clavier.

// Exemple pour N=5 et X=7 :

// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21
// 4 x 7 = 28
// 5 x 7 = 35

// Il est demand?? de choisir la structure r??p??titive (for, while, do...while) la mieux appropri??e au probl??me.

// //Event listener
ex8_4_sb.addEventListener("click", function(){ex8_4()});

function ex8_4() {
    document.getElementById("ex8_4_op").innerHTML = "";
    var n = document.getElementById("ex8_4_nb1").value;
    var y = document.getElementById("ex8_4_nb2").value;

    for (var i = 0; i - 1 < n; i++) {
        let res = i * y;
        document.getElementById("ex8_4_op").innerHTML = document.getElementById("ex8_4_op").innerHTML + "<br/>" + i + " " + " x " + " " + y + " = " + res;
    }
}

///////////////////////////// Exercice 5 JS08 /////////////////////////////

// Exercice 5 - Nombre de voyelles.

// Ecrire le programme qui compte le nombre de voyelles d???un mot saisi au clavier, en utilisant :

//     myVar.length : retourne le nombre de lettres de la cha??ne myVar.
//     myVar.substring(p,n) : extrait d'une cha??ne donn??e une sous-cha??ne de n caract??res ?? partir de la position p (attention, en Javascript, le 1er caract??re se trouve ?? la position 0)
//     myVar.indexOf(chaine) : retourne le rang de la premi??re occurrence de cha??ne dans la variable myVar donn??e (si non trouv?? : -1).

// //Event listener
ex8_5_sb.addEventListener("click", function(){ex8_5()});

function ex8_5() {
    var mot = document.getElementById("ex8_5_mot").value;
    var voy = 0;
    document.getElementById("ex8_5_op").innerHTML = "Le nombre de lettres dans la chaine est de : " + mot.length;
    for (i = 0; i < mot.length; i++) {
        if (mot.substring(i, i + 1).match(/[aeiouy]/ig)) {
            voy++;
            if (voy == 1) {
                index = i + 1;
                document.getElementById("ex8_5_op").innerHTML = document.getElementById("ex8_5_op").innerHTML + "<br/> La premi??re occurence d'une voyelle apparait en " + index + "em position.";
            }
        }
    }
    document.getElementById("ex8_5_op").innerHTML = document.getElementById("ex8_5_op").innerHTML + "<br/> La chaine de caract??res contient " + voy + " voyelles.";
}

///////////////////////////// Exercice 1 JS09 /////////////////////////////

// Exercice 1

// Cr??er les 2 fonctions suivantes :

//     produit(x, y) qui retourne le produit des 2 variables x, y pass??es en param??tre.
//     afficheImg(image) qui affiche l'image pass??e en param??tre. ( Le param??tre image correspond au chemin de votre image )

// Cr??er la page HTML correspondant au r??sultat ci-dessous :

// img_function_pap.JPG

// Vous aurez besoin de cette image

// //Event listener
ex9_1_sb.addEventListener("click", function(){ex9_1(0)});
ex9_1_pa.addEventListener("click", function(){ex9_1(1)});
ex9_1_de.addEventListener("click", function(){ex9_1(2)});

function ex9_1(idx) {
    switch (idx) {
        case (0):
            nb1 = document.getElementById('ex9_1_nb1').value;
            nb2 = document.getElementById('ex9_1_nb2').value;
            var prod = nb1 * nb2;
            document.getElementById('ex9_1_op').innerHTML = "Le produit des deux nombres est ??gal ?? : " + prod;
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

// Concevez la fonction strtok() qui prend 3 param??tres str1, str2, n en entr??e et renvoie une cha??ne de caract??res : str1 est compos??e d'une liste de mots s??par??s par le caract??re str2. strtok() sert ?? extraire le ni??me mot de str1.

// Exemple :

// Pour str1 = ?? robert ;dupont ;amiens ;80000 ??, strtok (str1, ?? ; ??, 3) doit retourner amiens.

// Indice : utilisez la m??thode split().

// //Event listener
ex9_2_sb.addEventListener("click", function(){ex9_2()});

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

    document.getElementById("ex9_2_op").innerHTML = "La valeur ?? l'index " + tok + " est ??gale ?? : " + index_retour;
}

///////////////////////////// Exercice 1 JS10 /////////////////////////////

// Exercice 1

// Ecrivez un programme permettant de cr??er un tableau, dont la taille est saisie au clavier.

// Ensuite l'utilisateur doit rentrer les diff??rentes valeurs du tableau.

// Puis votre programme doit afficher le contenu du tableau.

// //Event listener
ex10_1_sb1.addEventListener("click", function(){ex10_1_a()});
ex10_1_sb2.addEventListener("click", function(){ex10_1_b()});

const my_array10_1 = [];

function ex10_1_a() {
    document.getElementById("ex10_1_op").innerHTML = "";
    for (var i = 1; i < parseInt(document.getElementById("ex10_1_tab").value) + 1; i++) {
        input = document.createElement('input');
        label = document.createElement('label');
        setAttributes(label, { 'class': 'ex10_1_sb2' });
        br = document.createElement('br');
        document.getElementById("ex10_1_op").appendChild(label);
        label.innerHTML = "Entr??e n??" + i + " : ";
        document.getElementById("ex10_1_op").appendChild(input);
        document.getElementById("ex10_1_op").appendChild(br);
        setAttributes(input, { 'class': 'ex10_1_sb2', 'type': 'text', 'value': Math.floor(Math.random(100) * 100), 'id': 'ex10_1_input' + i });
        // input.setAttribute('class','ex10_1_i');
        // input.setAttribute('type','text');
        // input.setAttribute('placeholder','Valeur');
        // input.setAttribute('id','ex10_1_input'+i);
    }
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

// Cr??er le programme qui fournira un menu permettant d???obtenir les fonctionnalit??s suivantes ?? partir d???un tableau ?? une dimension :

//     Affichage du contenu de tous les postes du tableau,
//     Affichage du contenu d???un poste dont l???index est saisi au clavier,
//     Affichage du maximum et de la moyenne des postes du tableau

// Ce programme sera structur?? de la mani??re suivante :

//     une fonction GetInteger pour lire un entier au clavier,
//     une fonction InitTab pour cr??er et initialiser l???instance de tableau : le nombre de postes souhait?? sera entr?? au clavier,
//     une fonction SaisieTab pour permettre la saisie des diff??rents postes du tableau,
//     une fonction AfficheTab pour afficher tous les postes du tableau,
//     une fonction RechercheTab pour afficher le contenu d???un poste de tableau dont le rang est saisi au clavier
//     une fonction InfoTab qui affichera le maximum et la moyenne des postes.

// Les fonctions seront appel??es successivement.

// //Event listener
ex10_2_sb2.addEventListener("click", function(){initTab()});
ex10_2_sb3.addEventListener("click", function(){saisieTab()});
ex10_2_sb4.addEventListener("click", function(){afficheTab()});
ex10_2_sb5.addEventListener("click", function(){rechercheTab()});
ex10_2_sb6.addEventListener("click", function(){infoTab()});

var sai_int = 0;
var my_array10_2 = [];

//Le bouton est cach?? dans le HTML car aucune utilit?? pour un retour utilisateur
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
    //arrayLength = parseInt(getInteger("correspondant ?? la taille maximale du tableau"));
    var arrayLength = getInteger("ex10_2_taille_tab");
    if (arrayLength == false) {
        alert("Abuse pas gamin :(");
    }
    else {
        //alert("debug1"+arrayLength);
        my_array10_2 = new Array(arrayLength);
        //alert("La taille du tableau a ??t?? d??finie sur : "+my_array10_2.length);
        display_switch("ex10_2_sb2", "ex10_2_sb3");
    }
}

function saisieTab() {
    let idx = 0;
    //alert(my_array10_2.length);
    for (let i = 0; i < my_array10_2.length; i++) {
        idx = i + 1;
        //my_array10_2[i] = prompt("Saisissez l'entr??e n??"+ idx +" : ");
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        document.getElementById("ex10_2_output_saisie").appendChild(label);
        label.innerHTML = "Entr??e n??" + idx + " : ";
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
    //  idx = parseInt(getInteger("correspondant ?? l'index de la ligne ?? surligner"));
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
    document.getElementById('ex10_2_info').innerHTML = "La somme de tout le tableau est ??gal ?? : " + total_tab + "<br>La moyenne des entr??es est de : "
        + moy_tab + "<br>Le maximum est de " + max_tab + " et est contenu dans la ligne " + idx_max + " surlign??e en rouge."
    // alert("moyenne=" + moy_tab);
    // alert('maximum=' + max_tab);
}

///////////////////////////// Exercice 3 JS10 /////////////////////////////

// Exercice 3 : Tri d???un tableau

// Ecrire le programme qui r??alise le tri ?? bulles.

// //Event listener
ex10_3_sb1.addEventListener("click", function(){initTab10_3()});
ex10_3_sb2.addEventListener("click", function(){triTab10_3()});
ex10_3_sb3.addEventListener("click", function(){restart10_3()});

var my_array10_3 = [];

function initTab10_3() {

    //alert(parseInt(document.getElementById('ex10_3_taille_tab').value));
    my_array10_3 = new Array(parseInt(document.getElementById('ex10_3_taille_tab').value));


    let idx = 0;
    //alert(my_array10_2.length);
    for (let i = 0; i < my_array10_3.length; i++) {
        idx = i + 1;
        //my_array10_2[i] = prompt("Saisissez l'entr??e n??"+ idx +" : ");
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        document.getElementById("ex10_3_output_saisie").appendChild(label);
        label.innerHTML = "Entr??e n??" + idx + " : ";
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

    //Tri ?? bulles
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

    //Affichage sous forme de tableau du resultat tri??
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
    my_array10_3 = [];
    display_switch('ex10_3_sb3', 'ex10_3_sb1');
}

///////////////////////////// Exercice 1 JS13 /////////////////////////////

// Exercice

// Ecrivez un programme permettant de saisir diff??rentes valeurs num??rique (avec l'instruction window.prompt), ces valeurs seront rang??es dans un tableau.

// La saisie s'arr??te quand l'utilisateur entre la valeur 0.

// A la fin de la saisie, votre programme doit afficher le nombre de valeurs saisies, la somme et la moyenne.

// //Event listener
ex13_1_sb1.addEventListener("click", function(){sb_entry13_1()});

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
        label.innerHTML = "Entr??e n??" + idxtmp + " : ";
        document.getElementById("ex13_1_output_saisie").appendChild(input);
        document.getElementById("ex13_1_output_saisie").appendChild(button);
        document.getElementById("ex13_1_output_saisie").appendChild(br);
        setAttributes(button, { 'class': 'ex13_1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'ex13_1_button' + dynidx, 'onclick': 'sb_dynentry_13_1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'ex13_1_i', 'type': 'text', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'ex13_1_input' + dynidx });
        my_array13_1[dynidx] = parseInt(document.getElementById('ex13_1_first').value);
        //alert("DEBUG 2 : J'assigne la valeur : "+parseInt(document.getElementById('ex13_1_first').value)+"?? l'indice " +dynidx+"et j'incr??mente" );
        dynidx++;
    }
    else if (dynidx > 0) {
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        button = document.createElement('input');
        document.getElementById("ex13_1_output_saisie").appendChild(label);
        var idxtmp = dynidx+2;
        label.innerHTML = "Entr??e n??" + idxtmp + " : ";
        document.getElementById("ex13_1_output_saisie").appendChild(input);
        document.getElementById("ex13_1_output_saisie").appendChild(button);
        document.getElementById("ex13_1_output_saisie").appendChild(br);
        setAttributes(button, { 'class': 'ex13_1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'ex13_1_button' + dynidx, 'onclick': 'sb_dynentry_13_1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'ex13_1_i', 'type': 'number', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'ex13_1_input' + dynidx });
        var idxtmp2 = dynidx-1;
        my_array13_1[dynidx] = parseInt(document.getElementById('ex13_1_input' + idxtmp2).value);
        //alert("DEBUG 3 : J'assigne la valeur : "+parseInt(document.getElementById('ex13_1_input' + idxtmp2).value)+"?? l'indice " +dynidx+"et j'incr??mente" );
        //alert('debug my_array13_1.length = ' + my_array13_1.length);
        for(i=0;i<my_array13_1.length;i++){
            //cacher les submit dont le dynidx inf??rieur au dernier
            var tmp = dynidx-1;
            document.getElementById('ex13_1_button' + tmp).setAttribute("style","display:none")
        }
        dynidx++;
    }
}

function sb_dynentry_13_1(dynidx) {
    if (parseInt(document.getElementById('ex13_1_input' + dynidx).value) == 0) {
        //Break si entr??e = 0 et cr??ation de la table d'affichage
        //alert("egal a 0");
        document.getElementById('ex13_1_output_saisie').innerHTML = "";
        display_switch("ex13_1_sb1","");
        var arrayLength13_1 = my_array13_1.length;
        var table13_1 = document.createElement('table');
        var somme = 0;
        var moyenne = 0;
        for (var i=0, tr, td1, td2; i < arrayLength13_1; i++) {
            //alert("i :" + i);
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td1.appendChild(document.createTextNode(i + 1));
            //alert(my_array13_1[i]);
            td2.appendChild(document.createTextNode(my_array13_1[i]));
            somme = somme + parseInt(my_array13_1[i]);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table13_1.appendChild(tr);
            setAttributes(tr, { "id": "tr" + i });
        }
        br = document.createElement('br');
        document.getElementById("ex13_1_output_saisie").appendChild(table13_1);
        document.getElementById("ex13_1_output_saisie").appendChild(br);
        setAttributes(table13_1, { "border": "2", "width": "249px" });
        var moyenne = somme / my_array13_1.length;
        //alert(my_array13_1.length+" "+somme+" "+moyenne);
        var res = "Nombre d'entr??es dans le tableau = "+ my_array13_1.length+ " Somme des entr??es = "+somme+" Moyenne des entr??es = "+moyenne;
        p = document.createElement('p');
        p.appendChild(document.createTextNode(res));
        document.getElementById("ex13_1_output_saisie").appendChild(p);
    }
    else if (parseInt(document.getElementById('ex13_1_input' + dynidx).value) != 0) {
        //R??cuperer la valeur du champ input g??n??r?? dynamiquement et en recr??er un nouveau
        //alert("diff de 0");
        my_array13_1[dynidx+1] = parseInt(document.getElementById('ex13_1_input' + dynidx).value);
        add_input13_1();
    }
}

///////////////////////////// Exercice 1 JS14 /////////////////////////////

// Le but est d'externaliser le code JavaScript dans un fichier .js puis de tester l'int??gration de code HTML dans les fonctions Javascript.

//     Copier le code suivant dans votre ??diteur de texte pr??f??r??.

//     ````
//     <!DOCTYPE html>
//     <html>
//     <head>
//        <title>Mon 1er script</title>
//        <script>
//        alert("Coucou !");
//        console.log("Ah que Coucou !");
//        document.write("Coucou beuh !");
//        </script> 
//     </head>
//     <body>
//        <!-- Ajouter le code Javascript ici pour le titre -->   
//        <p>Rien ?? ajouter</p>  
//     </body>
//     </html>
//     ````

// Enregistrer le fichier puis l'ouvrir avec votre navigateur. Observez ce qu'il se passe, y compris dans la console.

//     Cr??er un fichier JavaScript nomm?? exercice1.js.
//     D??placer le code JavaScript du fichier HTML dans le fichier externe JavaScript et importer ce fichier dans le fichier HTML.
//     R??p??ter le titre de la page dans <body> avec l'instruction document.write(). Consultez la documentation sur le site W3Schools. Ajouter du code HTML dans la cha??ne de caract??res pass??e en param??tre.
//     Modifier la fonction alert() pour y passer en param??tre ??galement du code HTML. Que remarquez-vous ?
//     On aura du code HTML en alert et puis bennn voil??. Je passe cet exercice parce que bon.

///////////////////////////// Exercice 2 JS15 /////////////////////////////

// Votre programme doit g??n??rer un nombre al??atoire ?? l'aide de la fonction Math.random.

// Ecrivez la fonction verif() qui doit v??rifier si la saisie de l'utilisateur (dans textBox1) correspond au nombre magique, elle affiche des informations, trop grand, trop petit dans le label1.

// Quand votre programme fonctionne, modifiez-le pour rendre le javascript non intrusif.

// //Event listener
ex15_2_sb1.addEventListener("click", function(){verif()});
ex15_2_sb2.addEventListener("click", function(){new_game()});

var mg_nbr = (Math.floor(Math.random(100) * 100)) + 1;

function verif(){
    if(mg_nbr>parseInt(document.getElementById('ex15_2_rep').value)){
        document.getElementById('ex15_2_output_saisie').innerHTML = "Trop petit !"
    }
    else if(mg_nbr<parseInt(document.getElementById('ex15_2_rep').value)){
        document.getElementById('ex15_2_output_saisie').innerHTML = "Trop grand !"
    }
    else if(mg_nbr==parseInt(document.getElementById('ex15_2_rep').value)){
        document.getElementById('ex15_2_output_saisie').innerHTML = "Gagn?? !! Le nombre magique ??tait "+mg_nbr+".";
    }
}
function new_game(){
    mg_nbr = (Math.floor(Math.random(100) * 100)) + 1;
    document.getElementById('ex15_2_output_saisie').innerHTML = "";
}