const languages = ["Happy Birthday",
      "Joyeux anniversaire",
      "Feliz cumpleaños",
      "Alles Gute zum Geburtstag",
      "Buon compleanno",
      "生日快乐",
      "お誕生日おめでとう",
      "생일 축하합니다",
      "С днём рождения",
      "عيد ميلاد سعيد",
      "Selamat ulang tahun",
      "Gefeliciteerd",
      "Grattis på födelsedagen",
      "Feliz aniversário",
      "जन्मदिन मुबारक",
      "Doğum günün kutlu olsun",
      "La mulți ani",
      "Tillykke med fødselsdagen",
      "Wszystkiego najlepszego",
      "Χρόνια πολλά",
      "Срећан рођендан",
      "Všechno nejlepší",
      "生日快乐",
      "Chúc mừng sinh nhật",
      "Joyeux anniversaire"] ;

const candleArea = document.getElementById("candles");
const wishesArea = document.getElementById("wishes");

for (let i = 0; i < 5; i++) {
    const candle = document.createElement("div");
    candle.className = "candle";

    const flame = document.createElement("div");
    flame.className = "flame";

    candle.appendChild(flame);
    candleArea.appendChild(candle);
}

languages.forEach((text, index) => {
    const greeting = document.createElement("span");
    greeting.textContent = text;
    greeting.style.animationDelay = `${index * 0.08}s`;
    wishesArea.appendChild(greeting);
});