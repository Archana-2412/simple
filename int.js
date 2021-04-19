var p,t,r,a;

function cal(){

    var p =document.getElementById("principle").value;

    var t =document.getElementById("time").value;
    var r =document.getElementById("rate").value;

    var a = ((p*t*r)/100);

    document.getElementById("amount").value =a;
} 