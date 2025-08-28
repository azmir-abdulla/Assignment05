const heartIcons = document.querySelectorAll(".heart");

heartIcons.forEach((icon) =>
  icon.addEventListener("click", function (e) {
    const heartNumber = document.getElementById("heart-number");
    let heartCount = parseInt(heartNumber.innerText);

    if (heartCount >= 0) {
      heartCount = heartCount + 1;
      heartNumber.innerText = heartCount;
    }
  })
);

const callButtons = document.querySelectorAll("#call-button");

callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");

    const serviceTitle = card.querySelector(".service-title").innerText;
    const englishTitle = card.querySelector(".english-title").innerText;
    const hotlineNumber = card.querySelector(".hotline").innerText;

    const callAlert = "📞 " + englishTitle + " " + hotlineNumber;

    const coins = document.getElementById("coins");
    let coinsCount = parseInt(coins.innerText);

    if (coinsCount >= 20) {
      coinsCount -= 20;
      coins.innerText = coinsCount;
      alert(callAlert);

      const history = document.getElementById("history");
      const historyTime = new Date().toLocaleTimeString();

      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
              <div class="history flex justify-between items-center mt-6 mb-4 p-4 bg-[#FAFAFA] rounded-xl">
                <div class="left">
                  <h4 class="title hind-madurai-regular text-lg">${serviceTitle}</h4>
                  <h2 class="hotline font-bold">${hotlineNumber}</h2>
                </div>
                <div class="time text-sm text-gray-500">${historyTime}</div>
              </div>`;
      history.appendChild(newHistory);
    } else {
      coins.innerText = 0;
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
});

document.getElementById("clear").addEventListener("click", function () {
  const history = document.getElementById("history");

  history.innerHTML = "";
});

const copyButtons = document.querySelectorAll("#copy-button");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const hotlineNumber = card.querySelector(".hotline").innerText;

    navigator.clipboard.writeText(hotlineNumber);
    const copyAlert = "নাম্বার টি কপি হয়েছেঃ " + hotlineNumber;

    alert(copyAlert);

    const copies = document.getElementById("copies");
    let copyCount = parseInt(copies.innerText);
    if (copyCount >= 0) {
      copyCount = copyCount + 1;
      copies.innerText = copyCount;
    }
  });
});