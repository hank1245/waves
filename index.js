const windmill = document.querySelector(".windmill");

function generateWind() {
  windmill.style.animation = `spin ${Math.random() * 5 + 5}s linear infinite`;
}

setInterval(generateWind, 5000);
