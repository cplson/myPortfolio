import { fetchStack } from "/services/API.js";

const renderStack = async () => {
    
    const stack = await fetchStack.getStack();
  
    for (let i = 0; i < stack.length; i++) {
      const template = document.getElementById("stack-item-template");
      let container = document.getElementById("stack-list");
      let content = template.content.cloneNode(true);
      container.appendChild(content);
      content = document.getElementsByClassName("stack-item");
      content[
        i
      ].innerHTML = `<img class="stack-item-img" src="${stack[i].src}" />`;
      content = document.getElementsByClassName("stack-item-img");
      const hiddenElements = document.querySelectorAll(".stack-item-wrapper");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });
      hiddenElements.forEach((el) => observer.observe(el));
    }
  };

  export default renderStack;