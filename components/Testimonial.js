import { fetchTestimonials } from "../services/API.js";

const renderTestimonials = async () => {
  const testimonialList = await fetchTestimonials.getTestimonials();
  const template = document.getElementById("testimonial-template");
  const container = document.getElementById("testimonial-wrapper");
  let content = template.content.cloneNode(true);
  container.appendChild(content);
  content = document.getElementsByClassName("testimonial");
  document.getElementsByClassName("testimonial-img")[0].src =
    testimonialList[0].img;
  document.getElementsByClassName("testimonial-name")[0].innerHTML =
    testimonialList[0].name;
  document.getElementsByClassName("testimonial-relation")[0].innerHTML =
    testimonialList[0].relation;
  document.getElementsByClassName("testimony")[0].innerHTML =
    testimonialList[0].testimony;
};

export default renderTestimonials;
