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
    document.getElementsByClassName("testimonial-link")[i].href =
      testimonialList[i].linkedin;

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
  leftArrow();
  rightArrow();
};

const leftArrow = () => {
  document.getElementById("testimonial-left").addEventListener("click", () => {
    let testimonialList = document.getElementsByClassName("testimonial-card");
    let indicatorList = document.getElementsByClassName(
      "testimonial-indicator"
    );
    let index;
    for (let i = 0; i < testimonialList.length; i++) {
      if (testimonialList[i].classList.contains("show")) {
        index = i;
        console.log(index);
      }
    }
    testimonialList[index].classList.remove("show");
    testimonialList[index].classList.add("hide");
    indicatorList[index].classList.remove("active");
    indicatorList[index].classList.add("inactive");
    if (index != 0) {
      testimonialList[index - 1].classList.add("show");
      testimonialList[index - 1].classList.remove("hide");
      indicatorList[index - 1].classList.add("active");
      indicatorList[index - 1].classList.remove("inactive");
    } else {
      testimonialList[testimonialList.length - 1].classList.add("show");
      testimonialList[testimonialList.length - 1].classList.remove("hide");
      indicatorList[indicatorList.length - 1].classList.add("active");
      indicatorList[indicatorList.length - 1].classList.remove("inactive");
    }
  });
};

const rightArrow = () => {
  document.getElementById("testimonial-right").addEventListener("click", () => {
    let testimonialList = document.getElementsByClassName("testimonial-card");
    let indicatorList = document.getElementsByClassName(
      "testimonial-indicator"
    );
    let index;
    for (let i = 0; i < testimonialList.length; i++) {
      if (testimonialList[i].classList.contains("show")) {
        index = i;
      }
    }
    testimonialList[index].classList.remove("show");
    testimonialList[index].classList.add("hide");
    indicatorList[index].classList.remove("active");
    indicatorList[index].classList.add("inactive");
    if (index != testimonialList.length - 1) {
      testimonialList[index + 1].classList.add("show");
      testimonialList[index + 1].classList.remove("hide");
      indicatorList[index + 1].classList.add("active");
      indicatorList[index + 1].classList.remove("inactive");
    } else {
      testimonialList[0].classList.add("show");
      testimonialList[0].classList.remove("hide");
      indicatorList[0].classList.add("active");
      indicatorList[0].classList.remove("inactive");
    }
  });
};

export default renderTestimonials;
