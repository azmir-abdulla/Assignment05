


document.getElementById("heart").addEventListener("click", function () {
    const heartNumber = document.getElementById("heart-number");
    let heartCount = parseInt(heartNumber.innerText);

    if (heartCount >= 0) {
        heartCount = heartCount + 1;
        heartNumber.innerText = heartCount;
    }


})




document.getElementById("call-button").addEventListener("click", function () {

    const serviceTitle = document.getElementById("service-title").innerText;


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


    const history = document.getElementById("history");
   

    const historyTile = serviceTitle;
    const historyHotline = hotlineNumber;
    const historyTime = new Date().toLocaleTimeString();



    if (coinsCount >= 20) {
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `<div  class="history flex justify-between items-center mt-6 mb-4 p-4 bg-[#FAFAFA] rounded-xl">
          <div class="left">
            <h4  class="title hind-madurai-regular text-lg">${historyTile}</h4>
            <h2 class="hotline font-bold">${historyHotline}</h2>
          </div>
          <div class="time text-sm text-gray-500">${historyTime}</div>
        </div>`;

        history.appendChild(newHistory);
    }




});

document.getElementById("clear").addEventListener("click", function () {
    const history = document.getElementById("history");

    history.innerHTML = "";
})


document.getElementById("copy-button").addEventListener("click", function () {
    const hotlineNumber = document.getElementById("hotline").innerText;

    navigator.clipboard.writeText(hotlineNumber);
    const copyAlert = "নাম্বার টি কপি হয়েছেঃ " + hotlineNumber;

    alert(copyAlert)

    const copies = document.getElementById("copies");
    let copyCount = parseInt(copies.innerText);


    if (copyCount >= 0) {
        copyCount = copyCount + 1;

        copies.innerText = copyCount;

    }


})

