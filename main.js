

document.getElementById("heart").addEventListener("click", function () {
    const heartNumber = document.getElementById("heart-number");
    let heartCount = parseInt(heartNumber.innerText);
    
    if (heartCount >= 0) {
        heartCount = heartCount + 1;
       heartNumber.innerText = heartCount;
    }


})




document.getElementById("call-button").addEventListener("click", function () {


    const englishTitle = document.getElementById("english-title").innerText;
    const hotlineNumber = document.getElementById("hotline").innerText;
    const callAlert = "📞 " + englishTitle + " " + hotlineNumber;

    const coins = document.getElementById("coins");
    let coinsCount = parseInt(coins.innerText);

    if (coinsCount >= 20) {
        coinsCount = coinsCount - 20;
        coins.innerText = coinsCount;
        alert(callAlert);
    } 
    else {
        coins.innerText = 0;
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }

// history








});




document.getElementById("copy-button").addEventListener("click", function(){
    const hotlineNumber= document.getElementById("hotline").innerText;

     navigator.clipboard.writeText( hotlineNumber);
    const copyAlert = "নাম্বার টি কপি হয়েছেঃ " + hotlineNumber;

     alert(copyAlert)
     
    const copies=document.getElementById("copies");
    let copyCount= parseInt(copies.innerText);

//    console.log(copyCount)

    if (copyCount >= 0) {
        copyCount = copyCount + 1;

        copies.innerText= copyCount;
        
    }


})
