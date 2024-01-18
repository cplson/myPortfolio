export const fetchStack = {
  url: "./data/stack.json",
  getStack: async () => {
    const result = await fetch(fetchStack.url);
    return await result.json();
  },
};

export const fetchTestimonials = {
  url: "./data/testimonialList.json",
  getTestimonials: async () => {
    const result = await fetch(fetchTestimonials.url);
    return await result.json();
  },
};
