export const fetchStack = {
  url: "./data/stack.json",
  getStack: async () => {
    const result = await fetch(fetchStack.url);
    return await result.json();
  },
};
