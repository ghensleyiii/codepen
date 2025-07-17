const htmlBody = document.querySelector("body");
  const randomClickFunction = function() {
    const colors = ["#002942", "#0CA7DB", "#F56C05", "#DB3E00", "purple", "blue", "orange", "green", "yellow", "white", "#1E90FF", "#FFBF00"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    const headOne = document.querySelector('h1');
    headOne.textContent =`You clicked! Background is now: ${randomColor}. Click Again!`;
    console.log("You clicked! Background is now " + randomColor);
  };
  htmlBody.onclick = randomClickFunction;
