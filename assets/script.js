const copyemojis = document.querySelectorAll(".emoji");
const alertbox = document.getElementById("copy-alert");

copyemojis.forEach((copyemoji) => {
  copyemoji.addEventListener("click", (event) => {
    copypemoji(event, copyemoji);
  });
});

function copypemoji(event, copyemoji) {
  const text = copyemoji.parentElement.textContent;

  try {
    navigator.clipboard.writeText(text).then(() => {
      copyemoji.parentElement.classList.add("copied");
      setTimeout(() => {
        copyemoji.parentElement.classList.remove("copied");
      }, 2000);
      alertbox.style.display = "flex"; // show the alert
      setTimeout(() => {
        alertbox.style.display = "none"; // hide the alert
      }, 2000);
    });
  } catch (error) {
    console.error("Error copying to clipboard:", error);
  }
}
