//a function that returns the current year
// arrow function "const' with name of the function - parameters/argument - arrow(=>) - return value
export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) =>
  isIndex ? "Holberton School" : "Holberton School main dashboard";
