
 
document.getElementById("heart").addEventListener("click",function(){
 const heartNumber =document.getElementById("heart-number");
     let heartCount=parseInt(heartNumber.innerText);
    for(let i=0; i < 1; i++){
          heartCount++;
    }
    heartNumber.innerText = heartCount;
  
})




