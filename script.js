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

    document.addEventListener("DOMContentLoaded", () => {

      const animateSkillBars = () => {
        document.querySelectorAll(".progress").forEach(bar => {
          let rect = bar.getBoundingClientRect();
   
          if (rect.top < window.innerHeight - 50) {
        
            bar.style.width = bar.classList.contains("cpp") ? "70%" :
              bar.classList.contains("python") ? "60%" :
                bar.classList.contains("dsa") ? "20%" :
                  bar.classList.contains("htmlcss") ? "90%" :
                    bar.classList.contains("javascript") ? "75%" :
                      bar.classList.contains("php") ? "60%" :
                        bar.classList.contains("excel") ? "85%" : "0";
          }
        });
      };

      animateSkillBars();
      window.addEventListener("scroll", animateSkillBars);

      const animatedElements = document.querySelectorAll('.animated-card');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
        {

          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

      animatedElements.forEach(element => {
        observer.observe(element);
      });
    });

    document.addEventListener("contextmenu", e => e.preventDefault());
    document.onkeydown = function (e) {
      if (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "i")) {
        return false;
      }
    }