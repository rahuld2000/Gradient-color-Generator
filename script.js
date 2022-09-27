document.querySelector("#btn").addEventListener("click",function(){
var hex_num=["0","1","2","3","4","5","6","7","8","9","A","B","c","D","E","F"];

var code='';
var shade='';
for(var i=0;i<6;i++){
    var_rand=Math.floor(Math.random()*hex_num.length);
    var_random=Math.floor(Math.random()*hex_num.length);

    code += hex_num[var_rand]; 
    shade += hex_num[var_random];
}
document.getElementById("hex").innerHTML=code;
document.getElementById("hex2").innerHTML=shade;
document.body.style.background=`linear-gradient(to right,#${code},#${shade})`;
});