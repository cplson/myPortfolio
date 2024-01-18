import animations from "./modules/animations.js";
import {
  loadToastFail,
  loadToastSuccess,
  showToastFail,
  showToastSuccess,
} from "./components/Toast.js";
import { fetchStack } from "./services/API.js";

const PUBLIC_KEY = "TNQ9m1UoziIFqxly0";

emailjs.init(PUBLIC_KEY);

window.addEventListener("DOMContentLoaded", async () => {
  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        loadToastSuccess();
        loadToastFail();

        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        let name = document.getElementsByName("user_name");
        let email = document.getElementsByName("user_email");
        let message = document.getElementsByName("message");

        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            showToastSuccess();
          },
          function (error) {
            showToastFail();
          }
        );

        document.getElementById("contact-form").style.height = "0px";
        document.getElementById("contact-form").style.opacity = "0";
        document.getElementById("contact-button").style.display = "block";

        name[0].value = "";
        email[0].value = "";
        message[0].value = "";
      });
  };

  animations();
  renderStack();

  document
    .getElementById("contact-button")
    .addEventListener("click", displayContactForm);
});

const displayContactForm = () => {
  document.getElementById("contact-form").style.height = "auto";
  document.getElementById("contact-button").style.display = "none";
  setTimeout(() => {
    document.getElementById("contact-form").style.opacity = "1";
  }, 50);
  let container = document.getElementById("contact-wrapper");
  let toastToRemove = document.querySelectorAll(".toast");
  if (toastToRemove.length > 0) {
    container.removeChild(toastToRemove[0]);
  }
};

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
