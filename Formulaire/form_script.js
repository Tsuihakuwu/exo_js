// //Event listener
tech.addEventListener("change", function(){txtareachg()});

function txtareachg() {
    document.getElementById('environement').innerHTML = document.getElementById('tech').value + " : ";
}