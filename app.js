import { toastSuccess } from "./components/Toast.js";
import animations from "./modules/animations.js";

const PUBLIC_KEY = "TNQ9m1UoziIFqxly0";

emailjs.init(PUBLIC_KEY);

window.addEventListener("DOMContentLoaded", async () => {
  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps

        let name = document.getElementsByName("user_name");
        let email = document.getElementsByName("user_email");
        let message = document.getElementsByName("message");

        // emailjs.sendForm("contact_service", "contact_form", this).then(
        //   function () {
        //     showToastSuccess();
        //   },
        //   function (error) {
        //     showToastFail();
        //   }
        // );

        document.getElementById("contact-form").style.height = "0px";
        document.getElementById("contact-form").style.opacity = "0";
        document.getElementById("contact-button").style.display = "block";

        name[0].value = "";
        email[0].value = "";
        message[0].value = "";
      });
  };

  animations();

  document
    .getElementById("contact-button")
    .addEventListener("click", displayContactForm);
});

const displayContactForm = () => {
  document.getElementById("contact-form").style.height = "auto";
  document.getElementById("contact-button").style.display = "none";
  loadToastSuccess();
  loadToastFail();
  document.getElementById("contact-form").style.opacity = "1";
};

const loadToastSuccess = () => {
  let template = document.getElementById("toast-success-template");
  let content = template.content.cloneNode(true);
  let container = document.getElementById("contact-wrapper");
  container.appendChild(content);
};

const loadToastFail = () => {
  let template = document.getElementById("toast-fail-template");
  let content = template.content.cloneNode(true);
  let container = document.getElementById("contact-wrapper");
  container.appendChild(content);
};

const showToastSuccess = () => {
  let container = document.getElementById("contact-wrapper");
  let toast = document.getElementById("toast-success");
  toast.style.right = "8px";
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      container.removeChild(toast);
    }, 1600);
  }, 3000);
};

const showToastFail = () => {
  let container = document.getElementById("contact-wrapper");
  let toast = document.getElementById("toast-fail");
  toast.style.right = "8px";
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      container.removeChild(toast);
    }, 1600);
  }, 3000);
};
