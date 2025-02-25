function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function copyEmoji(emoji) {
  navigator.clipboard.writeText(emoji).then(() => {
    const toast = document.getElementById("toast");
    toast.classList.remove("opacity-0");
    setTimeout(() => {
      toast.classList.add("opacity-0");
    }, 1500);
  });
}

