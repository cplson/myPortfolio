import { fetchTestimonials } from "../services/API.js";


    const renderTestimonials = async () => {
        const testimonialList = await fetchTestimonials.getTestimonials();
        console.log(testimonialList);
    }


export default renderTestimonials