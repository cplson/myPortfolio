import { fetchTestimonials } from "../services/API.js";
let activeTestimonial;
const renderTestimonials = async () => {
  const testimonialList = await fetchTestimonials.getTestimonials();
  for (let i = 0; i < testimonialList.length; i++) {
    let template = document.getElementById("testimonial-template");
    let container = document.getElementById("testimonial-group");
    let content = template.content.cloneNode(true);
    container.appendChild(content);
    content = document.getElementsByClassName("testimonial-card");
    content[i].classList.add("hide");
    document.getElementsByClassName("testimonial-img")[i].src =
      testimonialList[i].img;
    document.getElementsByClassName("testimonial-name")[i].innerHTML =
      testimonialList[i].name;
    document.getElementsByClassName("testimonial-relation")[i].innerHTML =
      testimonialList[i].relation;
    document.getElementsByClassName("testimony")[i].innerHTML =
      testimonialList[i].testimony;

    template = document.getElementById("testimonial-indicator-template");
    container = document.getElementById("testimonial-indicator-group");
    content = template.content.cloneNode(true);
    container.appendChild(content);
  }
  if (testimonialList.length > 0) {
      let testimonial = document.getElementsByClassName("testimonial-card");
      activeTestimonial = testimonial[0];
    testimonial[0].classList.remove("hide");
    testimonial[0].classList.add("show");
    let indicators = document.getElementsByClassName("testimonial-indicator");
    indicators[0].classList.remove("inactive");
    indicators[0].classList.add("active");
  }
};

export default renderTestimonials;
