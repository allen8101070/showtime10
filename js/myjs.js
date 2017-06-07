var s = 10;
     
function reciprocal(){
  document.getElementById("showtime").innerHTML=s;
  if(s > 1){
  setTimeout(reciprocal,1000);      
  s -= 1;
  }
  else if(s == 1){
    document.location.href="https://github.com/allen8101070?tab=repositories";
  }
}