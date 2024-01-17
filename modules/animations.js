const animations = async () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-right");
      } else {
        entry.target.classList.remove("show-right");
      }
    });
  });

  const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-left");
      } else {
        entry.target.classList.remove("show-left");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  const hiddenRightElements = document.querySelectorAll(".hidden-right");
  const hiddenLeftElements = document.querySelectorAll(".hidden-left");

  hiddenElements.forEach((el) => observer.observe(el));
  hiddenRightElements.forEach((el) => rightObserver.observe(el));
  hiddenLeftElements.forEach((el) => leftObserver.observe(el));
};

export default animations;
