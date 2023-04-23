import "./css/animate.min.css";
import "./css/fonts.css";
import "./css/style.css";
document.addEventListener("DOMContentLoaded", () => {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.remove('hidden');
            change.target.classList.add('animate__fadeInLeft');
          }
        });
      }
      let options = { threshold: [0.5]};
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.animate__animated');
      for (let elm of elements) {
        observer.observe(elm);
      }
});

  