window.onload = function () {
  const audio = document.getElementById("background-music");
  audio.play().catch((error) => {
    console.log("Autoplay failed:", error);
  });
};
