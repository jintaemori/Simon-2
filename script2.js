document.getElementById("le").innerHTML = localStorage[0];

let l = localStorage[0];
console.log(l);
let te = '0';
let level = 1;
let arr = [];
let randorder = [];
let clickorder = [];
let btns = [];
var c = 0;
let hei = 0;
let btndim = 0;
let btnspc = 0;
let containerHeight = 0;
let startDimension = 0;


document.getElementById("bnspace").style.position = "absolute";
document.getElementById("bnspace1").style.position = "absolute";
document.getElementById("bnspace").style.top = "0px";
document.getElementById("bnspace1").style.top = "0px";
document.getElementById("bnspace1").style.bottom = "0px";
document.getElementById("bnspace1").style.left = "0px";
document.getElementById("bnspace1").style.right = "0px";
document.getElementById("bnspace1").style.backgroundColor = 'White';
document.getElementById("bnspace").style.zIndex = 0;
document.getElementById("bnspace1").style.zIndex = 1;


setTimeout(front, 1000);

function front(){
    document.getElementById("bnspace").style.zIndex = 1;
    document.getElementById("bnspace1").style.zIndex = 0;
}


for(let i1 = 0; i1 < l; i1++){
    btns.push([]);
    for(let j1 = 0; j1 < l; j1++){
        btns[i1].push(0);
    }
}

for(let i = 0; i < l; i++){
    for(let j = 0; j < l; j++){
        te = i.toString() + j.toString();
        btns[i][j] = document.createElement('button');
        btns[i][j].id = te;
        //btns[i][j].innerHTML = te;
        btns[i][j].onclick = function(){
            arr.push(btns[i][j].id); 
            console.log(arr);
            push(i, j);
            setTimeout(unpush, 200, i, j);
        };
        document.getElementById("bnspace").appendChild(btns[i][j]);
    }
}

function sizing(){
    if (window.innerWidth > window.innerHeight) {
        hei = window.innerHeight/20;
        btndim = (15*hei)/l;
        btnspc = (2*hei)/(l-1);
        containerHeight = 18*(window.innerHeight/20);
        startDimension = ((window.innerWidth - containerHeight)/2) + (window.innerHeight/20);
    }
    else{
        hei = window.innerWidth/20;
        btndim = (15*hei)/l;
        btnspc = (2*hei)/(l-1);
        containerHeight = 18*(window.innerWidth/20);
        startDimension = ((window.innerHeight - containerHeight)/2) + (window.innerWidth/20);
    }
    for(let i = 0; i < l; i++){
        for(let j = 0; j < l; j++){
            btns[i][j].style.position = "absolute";
            if (window.innerWidth > window.innerHeight) {
                btns[i][j].style.left = `${(startDimension + i*(btndim+btnspc))}px`;
                btns[i][j].style.top = `${(hei*1.5 + j*(btndim+btnspc))}px`;
            }
            else{
                btns[i][j].style.left = `${(hei*1.5 + i*(btndim+btnspc))}px`;
                btns[i][j].style.top = `${(startDimension + j*(btndim+btnspc))}px`;
            }
            btns[i][j].style.backgroundColor = cld(i, j);
            btns[i][j].style.width = `${btndim}px`;
            btns[i][j].style.height = `${btndim}px`;
            btns[i][j].style.borderColor = 'Transparent';
            btns[i][j].style.borderTopLeftRadius = `${btndim/4}px`;
            btns[i][j].style.borderTopRightRadius = `${btndim/4}px`;
            btns[i][j].style.borderBottomLeftRadius = `${btndim/4}px`;
            btns[i][j].style.borderBottomRightRadius = `${btndim/4}px`;
        }
    }
}

sizing();

window.addEventListener('resize', sizing);

console.log('start');

function push(i, j){
    var a = btns[i][j].style.backgroundColor;
    a = a.split(',');
    a[3] = ' 0.99)';
    btns[i][j].style.backgroundColor = a;
    console.log('pushed');
}

function unpush(i, j){
    var a = btns[i][j].style.backgroundColor;
    a = a.split(',');
    a[3] = ' 0.66)';
    btns[i][j].style.backgroundColor = a;
    console.log('unpushed');
}

function levelpushgen(){
    i = Math.floor(Math.random()*l);
    j = Math.floor(Math.random()*l);
    te = i.toString() + j.toString();
    randorder.push(te);
    push(i, j);
    setTimeout(unpush, 2000, i, j);
}

function cld(u, v){
    u = u / (l-1);
    v = v / (l-1);
    z = 1 - u - v;
    u *= 255;
    v *= 255;
    z *= 255;
    return `rgba(${u}, ${v}, ${z}, 0.66)`;
}

/*
setTimeout(push, 1000, 1, 1);
setTimeout(unpush, 2000, 1, 1);
*/