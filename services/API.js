export const fetchStack = {
  url: "./data/stack.json",
  fetchStack: async () => {
    const result = await fetch(fetchStack.url);
    return await result.json();
  },
};
