function klik(){
    document.getElementById("ujicoba").innerHTML="Ganti Tulisan";
}

function ON(){
    document.getElementById("lampu").src="pic_bulbon.gif";
}
function OFF(){
    document.getElementById("lampu").src="pic_bulboff.gif";
}

function Destroy(){
    document.getElementById('tulisan').style.display='none';
}
function show(){
    document.getElementById('tulisan').style.display='block';
}

var x,y,z;
x="test";
y=20;
z=x+y;
//function Hitung(){
    //document.getElementById('tulisan').innerHTML=z;
//}

function Hitung(){
    window.alert(z);
}

var a = new Date(2011,12,12,21,21,12);
function Show_Tanggal(){
    document.getElementById("tulisan").innerHTML=a;
}

function input_show(){
    var teks=document.getElementById("mytext").value;
    document.getElementById("tampilkan").innerHTML=teks;
}