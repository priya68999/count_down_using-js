const da=document.getElementById('days');
const mi=document.getElementById('mins');
const ho=document.getElementById('hours');
const se=document.getElementById('seconds');



const new1="1 jan 2022";
function countdown(){
const newdate= new Date(new1);
const current=new Date();
const aseconds=(newdate-current)/1000;
const days= Math.floor(aseconds /3600 /24);
const hours= Math.floor(aseconds/3600)%24;
const mins= Math.floor(aseconds/60) % 60;
const secon= Math.floor(aseconds) % 60;

console.log(hours);
console.log(days);
console.log(secon);

da.innerHTML= format(days);
ho.innerHTML= format(hours);
mi.innerHTML= format(mins);
se.innerHTML= format(secon);








}
function format(time){
    return time<10 ? `0${time}`:time;

    
}
countdown();
setInterval(countdown,1000)