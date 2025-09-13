function sendToGmail(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let to = "ankit8597286@gmail.com";
  let subject = `New message from ${name}`;
  let body = `Hello, I am ${name} (${email}).\n\n${message}`;

  let url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    let rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.classList.contains("cpp") ? "70%" :
        bar.classList.contains("python") ? "45%" :
          bar.classList.contains("dsa") ? "20%" :
            bar.classList.contains("htmlcss") ? "80%" :
              bar.classList.contains("javascript") ? "47%" :
                bar.classList.contains("php") ? "50%" :
                  bar.classList.contains("excel") ? "60%" : "0";
    }
  });
});
document.addEventListener("contextmenu", e => e.preventDefault()); // disable right click
  document.onkeydown = function(e) {
    if (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "i")) {
      return false; // disable Ctrl+U, Ctrl+S, Ctrl+Shift+I
    }
  }