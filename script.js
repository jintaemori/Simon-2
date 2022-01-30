localStorage[0] = 2;
function incr() {
    localStorage[0]++;
    document.getElementById("le").innerHTML = localStorage[0]-1;
}

function decr() {
    if (localStorage[0] > 1){
        localStorage[0]--;
        document.getElementById("le").innerHTML = localStorage[0]-1;
    }
}


