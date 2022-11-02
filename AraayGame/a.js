let a=document.getElementById("reset"),cc=document.getElementById("count");
a.addEventListener("click",reset);
var game;
var c=0;
reset();
var ids;
var ev;
let list;
let dd=["1","2","3","4","5","6","7","8"," "];


//functions
//

//function 1
function shuffle() {
let n=["1","2","3","4","5","6","7","8"," "];
  return n.sort(() => Math.random() - 0.5);
}

//function 2

function reset(){
c=0;
cc.innerHTML=c;
game =shuffle();
ids=["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
ev=["e1","e2","e3","e4","e5","e6","e7","e8","e9"];


for(let ii=0;ii<game.length;ii++){
document.getElementById(ids[ii]).innerHTML=game[ii];
ev[ii]=document.getElementById(ids[ii]);
}

}
///function 3
function ref(){

for(let ii=0;ii<game.length;ii++){
list[ii]=document.getElementById(ids[ii]).innerHTML;
}
if(list==dd){
alert("You Win");
}

}


//////////Event/////listeners////start/////
//1
ev[0].addEventListener('click', function() {
if(ev[1].innerHTML==" "){
ev[1].innerHTML=ev[0].innerHTML;
ev[0].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[3].innerHTML==" "){
ev[3].innerHTML=ev[0].innerHTML;
ev[0].innerHTML=" ";
c++;
cc.innerHTML=c;
}
 ref(); });
//2
ev[1].addEventListener('click', function() {
if(ev[0].innerHTML==" "){
ev[0].innerHTML=ev[1].innerHTML;
ev[1].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[2].innerHTML==" "){
ev[2].innerHTML=ev[1].innerHTML;
ev[1].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[4].innerHTML==" "){
ev[4].innerHTML=ev[1].innerHTML;
ev[1].innerHTML=" ";
c++;
cc.innerHTML=c;
}

  ref();});
//3
ev[2].addEventListener('click', function() {
if(ev[1].innerHTML==" "){
ev[1].innerHTML=ev[2].innerHTML;
ev[2].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[5].innerHTML==" "){
ev[5].innerHTML=ev[2].innerHTML;
ev[2].innerHTML=" ";
c++;
cc.innerHTML=c;
}
  ref();});
//4
ev[3].addEventListener('click', function() {
if(ev[0].innerHTML==" "){
ev[0].innerHTML=ev[3].innerHTML;
ev[3].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[4].innerHTML==" "){
ev[4].innerHTML=ev[3].innerHTML;
ev[3].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[6].innerHTML==" "){
ev[6].innerHTML=ev[3].innerHTML;
ev[3].innerHTML=" ";
c++;
cc.innerHTML=c;
}

 ref(); });
//5
ev[4].addEventListener('click', function() {
if(ev[1].innerHTML==" "){
ev[1].innerHTML=ev[4].innerHTML;
ev[4].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[3].innerHTML==" "){
ev[3].innerHTML=ev[4].innerHTML;
ev[4].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[5].innerHTML==" "){
ev[5].innerHTML=ev[4].innerHTML;
ev[4].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[7].innerHTML==" "){
ev[7].innerHTML=ev[4].innerHTML;
ev[4].innerHTML=" ";
c++;
cc.innerHTML=c;
}

 ref(); });
//6
ev[5].addEventListener('click', function() {
if(ev[2].innerHTML==" "){
ev[2].innerHTML=ev[5].innerHTML;
ev[5].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[4].innerHTML==" "){
ev[4].innerHTML=ev[5].innerHTML;
ev[5].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[8].innerHTML==" "){
ev[8].innerHTML=ev[5].innerHTML;
ev[5].innerHTML=" ";
c++;
cc.innerHTML=c;
}

  ref();});
//7
ev[6].addEventListener('click', function() {
if(ev[3].innerHTML==" "){
ev[3].innerHTML=ev[6].innerHTML;
ev[6].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[7].innerHTML==" "){
ev[7].innerHTML=ev[6].innerHTML;
ev[6].innerHTML=" ";
c++;
cc.innerHTML=c;
}
  ref();});


//8

ev[7].addEventListener('click', function() {
if(ev[6].innerHTML==" "){
ev[6].innerHTML=ev[7].innerHTML;
ev[7].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[4].innerHTML==" "){
ev[4].innerHTML=ev[7].innerHTML;
ev[7].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[8].innerHTML==" "){
ev[8].innerHTML=ev[7].innerHTML;
ev[7].innerHTML=" ";
c++;
cc.innerHTML=c;
}

 ref(); });


//9
ev[8].addEventListener('click', function() {
if(ev[7].innerHTML==" "){
ev[7].innerHTML=ev[8].innerHTML;
ev[8].innerHTML=" ";
c++;
cc.innerHTML=c;
}
else if(ev[5].innerHTML==" "){
ev[5].innerHTML=ev[8].innerHTML;
ev[8].innerHTML=" ";
c++;
cc.innerHTML=c;
}
  ref();});
//////////Event/////listeners////end/////
