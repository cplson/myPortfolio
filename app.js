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
        
        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

        document.getElementById("contact-form").style.display = "none";
        document.getElementById("contact-button").style.display = "block";

        let name = document.getElementsByName("user_name");
        let email = document.getElementsByName("user_email");
        let message = document.getElementsByName("message");

        name[0].value = "";
        email[0].value = "";
        message[0].value = "";
      });
  };

  document
    .getElementById("contact-button")
    .addEventListener("click", displayContactForm);
});

const displayContactForm = () => {
  document.getElementById("contact-button").style.display = "none";
  document.getElementById("contact-form").style.display = "block";
};
